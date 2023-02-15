import { defineComponent, Ref, ref } from 'vue';
import s from './Tags.module.scss';
type Tag = {
    id: number;
    name: String;
    sign: String;
    category: String;
}
type SelectDataMap = {
    [key: string]: Ref<Tag[]>
}
export const Tags = defineComponent({
    props: {
        selected: {
            type: String,
            required: true
        },
        tagId: Number
    },
    setup(props, context) {
        const refExpensesTags = ref([
            { id: 1, name: '餐费', sign: '￥', category: 'expenses' },
            { id: 2, name: '打车', sign: '￥', category: 'expenses' },
            { id: 3, name: '聚餐', sign: '￥', category: 'expenses' },
            { id: 4, name: '打车', sign: '￥', category: 'expenses' },
            { id: 5, name: '聚餐', sign: '￥', category: 'expenses' },
            { id: 6, name: '打车', sign: '￥', category: 'expenses' },
            { id: 7, name: '聚餐', sign: '￥', category: 'expenses' }
        ])
        const refIncomeTags = ref([
            { id: 8, name: '滴滴', sign: '￥', category: 'income' },
            { id: 9, name: '彩票', sign: '￥', category: 'income' },
            { id: 10, name: '滴滴', sign: '￥', category: 'income' },
            { id: 11, name: '工资', sign: '￥', category: 'income' },
            { id: 12, name: '彩票', sign: '￥', category: 'income' },
            { id: 13, name: '滴滴', sign: '￥', category: 'income' },
            { id: 14, name: '彩票', sign: '￥', category: 'income' },
            { id: 15, name: '滴滴', sign: '￥', category: 'income' },
            { id: 16, name: '彩票', sign: '￥', category: 'income' },
            { id: 17, name: '滴滴', sign: '￥', category: 'income' },
            { id: 18, name: '工资', sign: '￥', category: 'income' },
            { id: 19, name: '彩票', sign: '￥', category: 'income' },
            { id: 20, name: '滴滴', sign: '￥', category: 'income' },
            { id: 21, name: '彩票', sign: '￥', category: 'income' },
            { id: 22, name: '滴滴', sign: '￥', category: 'income' },
            { id: 23, name: '彩票', sign: '￥', category: 'income' },
            { id: 24, name: '滴滴', sign: '￥', category: 'income' },
            { id: 25, name: '工资', sign: '￥', category: 'income' },
            { id: 26, name: '彩票', sign: '￥', category: 'income' },
            { id: 27, name: '滴滴', sign: '￥', category: 'income' },
            { id: 28, name: '彩票', sign: '￥', category: 'income' },
            { id: 29, name: '滴滴', sign: '￥', category: 'income' },
            { id: 30, name: '彩票', sign: '￥', category: 'income' },
            { id: 31, name: '滴滴', sign: '￥', category: 'income' },
            { id: 32, name: '工资', sign: '￥', category: 'income' },
            { id: 33, name: '彩票', sign: '￥', category: 'income' },
            { id: 34, name: '滴滴', sign: '￥', category: 'income' },
            { id: 35, name: '彩票', sign: '￥', category: 'income' },
            { id: 36, name: '滴滴', sign: '￥', category: 'income' },
            { id: 37, name: '彩票', sign: '￥', category: 'income' },
            { id: 38, name: '滴滴', sign: '￥', category: 'income' }
        ])
        const selectData: SelectDataMap = {
            'expend': refExpensesTags,
            'income': refIncomeTags
        }
        const onTagClick = (id: number) => {
            console.log(id, 'id')
            context.emit('update:tagId', id)
        }
        
        return () => (<>
            {selectData[props.selected].value.map((tag: Tag) => {
                return <div class={[s.tag, props.tagId === tag.id ? s.selected : '']} onClick={() => onTagClick(tag.id)}>
                    <div class={s.sign}>
                        {tag.sign}
                    </div>
                    <div class={s.name}>
                        {tag.name}
                    </div>
                </div>
            })}
        </>

        )
    }
})
