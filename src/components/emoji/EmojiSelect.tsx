import { computed, defineComponent, ref } from 'vue';
import { emojiList } from '../../shared/emoji';
import s from './EmojiSelect.module.scss';

export const EmojiSelect = defineComponent({
    props: {
        modelValue: {
            type: String
        },
        onUpdateModelValue: {
            type: Function
        }
    },
    setup(props, context) {
        const selected = ref(0)
        const selectEmo = ref()
        const table: [string, string[]][] = [
            ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
                'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
                'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
            ]],
            ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
                'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
            ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
                'person-activity', 'person-sport', 'person-resting']],
            ['衣服', ['clothing']],
            ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
                'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
            ['植物', ['plant-flower', 'plant-other']],
            ['自然', ['sky & weather', 'science']],
            ['食物', [
                'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
                'food-marine', 'food-sweet'
            ]],
            ['运动', ['sport', 'game']],
        ]
        const onSelected = (index: number) => {
            selected.value = index
        }
        const onClickEmoji = (emoji: string) => {
            console.log(emoji)
            selectEmo.value = emoji
            context.emit('update:modelValue', emoji)
        }
        const navs = computed(() => {
            return table.map((item, index) => {
                return <span class={selected.value === index ? s.selected : ''} onClick={() => onSelected(index)}>{item[0]}</span>
            })
        })
        

        return () => {
            const emojis = table[selected.value][1].map((category) => {
                let emojis = emojiList.find(array => array[0] === category) || ['', []]
                return (emojis?.[1] as Array<string>).map(emo => <li class={selectEmo.value === emo ? s.showBorder : ''} onClick={() => onClickEmoji(emo)}>{emo}</li>)
            })
            return (
                <div class={s.emojiList}>
                    <nav>
                        {navs.value}
                    </nav>
                    <ol>
                        {emojis}
                    </ol>
                </div>
            )
        }
    }
})