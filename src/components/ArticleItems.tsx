'use client';
import {useState, useEffect} from 'react';
import { inPageSliderconfig } from '@/utils/sliderConfig';
import SliderContainer, { SlideWrapper } from "@/components/UI/Slider";
import AppLink from '@/components/UI/AppLink';
import { ArticleItem } from '@/lib/nobox/type';
import { ArticleModel } from '@/lib/nobox/structure';
import { bareFormatDate } from '@/utils/formatDate';



function useArticles(): ArticleItem[] {
    const [items, setItems] = useState<ArticleItem[] | null>(null);


    useEffect(()=>{
        (async ()=>{
            if (items !== null) return;

            const data = await ArticleModel.find();

            setItems(()=>data);
            return;
        })()
    }, [items])

    return items || []
}


export default function ArticleItems() {

    const articles = useArticles();


    if (articles.length < 1) {
        return <div className="no-article"></div>
    }
    
    return (
        <SliderContainer
            {...inPageSliderconfig}
            className='featured-slide'
        >
            {
                articles.map((item, i)=>(
                    <SlideWrapper key={i}>
                        <article >
                            <AppLink
                                href="/"
                                className='text-decoration-none'
                            >
                                <div
                                    className="img"
                                    style={{backgroundImage: `url(${item.image})`}}
                                />

                                <div className='details'>
                                    <h2
                                        className='fw-500 fs-14 lh-24 text-clr-dark'
                                    >
                                        {item.title}
                                    </h2>

                                    <p
                                        className='date fw-400 fs-12 lh-24 text-clr-5'
                                    >
                                        {bareFormatDate(item.createdAt)}
                                    </p>
                                </div>
                            </AppLink>
                        </article>
                    </SlideWrapper>
                ))
            }
        </SliderContainer>
    )
}
