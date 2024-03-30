'use client'
import {useCallback} from 'react'
import styles from '../main/styles/index.module.css'
import React, {useState} from 'react'

const MainPage = () => {
    const [selectedCity, setSelectedCity] = useState('Москва')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [modalImageSrc, setModalImageSrc] = useState('')
    const [modalText, setModalText] = useState('')
    const [currentStoryIndex, setCurrentStoryIndex] = useState(null)
    const [modalAdditionalText, setModalAdditionalText] = useState('')


    const handleCloseModal = useCallback(() => {
        setShowModal(false)
        setModalImageSrc('')
        setModalText('')
    }, [])

    const handleNextStory = () => {
        const nextIndex = (currentStoryIndex + 1) % cards.length // Циклический переход к следующей карточке
        const nextCard = cards[nextIndex]
        setModalImageSrc(nextCard.imageSrc)
        setModalText(nextCard.title)
        setCurrentStoryIndex(nextIndex)
    }

    const handlePreviousStory = () => {
        const prevIndex = (currentStoryIndex - 1 + cards.length) % cards.length // Циклический переход к предыдущей карточке
        const prevCard = cards[prevIndex]
        setModalImageSrc(prevCard.imageSrc)
        setModalText(prevCard.title)
        setCurrentStoryIndex(prevIndex)
    }
    const handleCardClick = useCallback((imageSrc, text, additionalText, index) => {
        setModalImageSrc(imageSrc)
        setModalText(text)
        setCurrentStoryIndex(index)
        setModalAdditionalText(additionalText) // Новое состояние для дополнительного текста
        setShowModal(true)
    }, [])


    const cards = [{
        title: 'Высота не предел',
        imageSrc: '/main/db586a5eccc486a68789b78cdf0d700b.jpg',
        altText: 'Image description',
        additionalText: 'Дополнительный текст для Высоты не предел',

    }, {
        title: 'Идеи для свиданий',
        imageSrc: '/main/1645030221_18_fikiwiki_com_p_kartinki_krasivie_vertikalnie_20.jpg',
        altText: 'Image description for ideas for dates',
        additionalText: 'Дополнительный текст для Высоты не предел',
    }, {
        title: 'Куда поехать?',
        imageSrc: '/main/img3_akspic_ru_lednikovoe_ozero_karovoe_ozero_dikaya_mestnost_nacionalnyj.jpg',
        altText: 'Image description for where to go',
        additionalText: 'Дополнительный текст для Высоты не предел',
    },

    ]
    const images = [
        {
            src: '/main/svg.svg',
            alt: 'Описание изображения 1',
            className: styles.svgIcon
        }, {
            src: '/main/svg-1.svg',
            alt: 'Описание изображения 2',
            className: styles.svgIcon1
        }, {
            src: '/main/svg-2.svg',
            alt: 'Описание изображения 3',
            className: styles.svgIcon2
        }, {
            src: '/main/svg-3.svg',
            alt: 'Описание изображения 4',
            className: styles.svgIcon3
        }, {
            src: '/main/svg-4.svg',
            alt: 'Описание изображения 5',
            className: styles.svgIcon4
        }, {
            src: '/main/svg-5.svg',
            alt: 'Описание изображения 6',
            className: styles.svgIcon5
        }, {
            src: '/main/svg-6.svg',
            alt: 'Описание изображения 7',
            className: styles.svgIcon6
        }
    ]
    // Состояние для выбранного города
    const card = [{
        titleLines: ['Семинар «Как приручить', 'водоем»'],
        address: 'пр-т Мира, 119',
        buttonImageSrc: '/main/button--image@2x.png',
        iconSrc: '/main/svg-7.svg',
        actionText: 'Посмотреть',
    },

        {
            titleLines: ['Концерт «День рождения', 'композитора. Модест'],
            address: 'Большой Николопесковский пер., 11',
            buttonImageSrc: '/main/button--image-1@2x.png',
            iconSrc: '/main/svg-8.svg',
            actionText: 'Посмотреть',
        },]
    const car = [{
        id: 1,
        imageSrc: '/main/image-2@2x.png',
        buttonIconSrc: '/main/button-1.svg',
        title: 'Московский',
        subtitle: 'зоопарк',
    }, {
        id: 2,
        imageSrc: '/main/image-3@2x.png',
        buttonIconSrc: '/main/button-2.svg',
        title: 'Музей',
        subtitle: 'криптографии',
    }, {
        id: 3,
        imageSrc: '/main/image-3@2x.png',
        buttonIconSrc: '/main/button-2.svg',
        title: 'Музей',
        subtitle: 'криптографии',
    },]
    // Список городов для выбора
    const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Екатеринбург']

    return (<div className={styles.russpassruByHtmltodesign}>
        <a href="https://dd13-46-158-109-14.ngrok-free.app/vhod">
            <img className={styles.headerIcon} alt="" src="/main/header.svg"/>
        </a>

        <img
            className={styles.counterIcon}
            loading="lazy"
            alt=""
            src="/main/counter@2x.png"
        />
        <main className={styles.main}>
            <img className={styles.imageFillIcon} alt="" src="/main/image-fill@2x.png"/>
            <section className={styles.footer}>
                <div className={styles.link}>
                    <img className={styles.imageIcon} alt="" src="/main/image@2x.png"/>
                    <div className={styles.storys}>
                        {cards.map((card, index) => (<div key={index} className={styles.list}
                                                          onClick={() => handleCardClick(card.imageSrc, card.title, card.additionalText, index)}>
                            <img
                                className={styles.maskGroupIcon}
                                loading="lazy"
                                alt={card.altText}
                                src={card.imageSrc}
                            />
                            <b className={styles.b}>{card.title}</b>
                        </div>))}
                    </div>

                </div>
            </section>
            <section className={styles.afterParent}>
                <div className={styles.after}/>
                <div className={styles.div}>
                    <div className={styles.sVG}>
                        <div className={styles.policies}>
                            {/* Оставляем статические части без изменений */}
                            <div className={styles.russpass}>
                                <p className={styles.p2}>Спланируйте идеальное</p>
                                <p className={styles.russpass1}>путешествие с RUSSPASS</p>
                            </div>
                            <div className={styles.link1}>
                                {/* Выпадающий список с городами, с применением стилей текста */}
                                <select
                                    className={styles.div1}
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    style={{
                                        appearance: 'none',
                                        background: `url('/main/after.svg') no-repeat right`,
                                        backgroundSize: '1.5em',
                                        paddingRight: '2em',
                                        color: 'inherit', // Пример использования наследования цвета текста
                                        fontFamily: 'inherit', // Пример использования наследования шрифта
                                    }}
                                >
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>))}
                                </select>
                            </div>
                            <div className={styles.before}/>
                        </div>
                        <div className={styles.divsearchbytabsWrapperB3mk}>
                            <div className={styles.button}>
                                <div className={styles.link2}>
                                    {images.slice(0, -1).map((img, index) => (
                                        <img key={index} className={img.className} loading="lazy" alt={img.alt}
                                             src={img.src}/>))}
                                </div>
                            </div>
                            <div className={styles.form}>
                                <div className={styles.divsearchbytabsInputwrapper}>
                                    <div className={styles.input}>
                                        <input
                                            className={styles.input1}
                                            placeholder="Найти место или событие"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className={styles.divdatepickernotaSelectTsv}>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className={styles.dateInput}
                                    />
                                    <span>—</span>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className={styles.dateInput}
                                    />
                                </div>
                                <button className={styles.button1}>
                                    <div className={styles.div3}>Найти</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divmainsearchWhiteblock4dx}/>
            </section>
            <section className={styles.frameParent}>
                <div className={styles.wrapper}>
                    <h3 className={styles.h3}>Места и события</h3>
                </div>
                <div className={styles.divmaincatalogContentVqurxWrapper}>
                    <div className={styles.divmaincatalogContentVqurx}>
                        {card.map((card, index) => (<div key={index} className={styles.divpreviewcardWrapGdzvg}>
                            <div className={styles.buttonImageParent}>
                                <img className={styles.buttonImage} alt="" src={card.buttonImageSrc}/>
                                <div className={styles.after1}/>
                            </div>
                            <div className={styles.imageContainerParent}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.div4}>
                                        {card.titleLines.map((line, index) => (
                                            <p key={index} className={styles[`p${3 + index}`]}>{line}</p>))}
                                    </div>
                                    <div className={styles.aboutCityCardParent}>
                                        <div className={styles.aboutCityCard}>
                                            {card.iconSrcs ? card.iconSrcs.map((iconSrc, i) => (
                                                <img key={i} className={styles[`svgIcon${7 + i}`]} alt=""
                                                     src={iconSrc}/>)) : (
                                                <img className={styles.svgIcon7} alt="" src={card.iconSrc}/>)}
                                        </div>
                                        <div className={styles.divmainsubtitlesAddressSae}>
                                            <div className={styles.div5}>{card.address}</div>
                                            {card.additionalInfo &&
                                                <div className={styles.div9}>{card.additionalInfo}</div>}
                                        </div>
                                    </div>
                                </div>
                                <button className={styles.button2}>
                                    <div className={styles.div6}>{card.actionText}</div>
                                </button>
                            </div>
                        </div>))}
                    </div>
                </div>
                <div className={styles.viewAllButton}>
                    <button className={styles.button4}>
                        <div className={styles.div10}>Посмотреть все</div>
                    </button>
                </div>
                <div className={styles.header}>
                    <div className={styles.counter}>
                        <div className={styles.article1}>
                            <img
                                className={styles.imageIcon1}
                                alt=""
                                src="/main/image-1@2x.png"
                            />
                            <h1 className={styles.h1}>
                  <span className={styles.txt1}>
                    <p className={styles.p7}>Аудиоэкскурсии</p>
                    <p className={styles.p8}>по Москве</p>
                  </span>
                            </h1>
                            <div className={styles.div11}>
                                Маршруты от профессиональных гидов
                            </div>
                            <button className={styles.button5}>
                                <div className={styles.div12}>Подробнее</div>
                            </button>
                        </div>
                        <div className={styles.articleListItemWrapper}>
                            <h2 className={styles.articleList}>•••</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.cityDescription}>
                    <div className={styles.footerWrapper}>
                        <div className={styles.footer1}>
                            <div className={styles.article2}/>
                            <div className={styles.div13}>Москва</div>
                            <h3 className={styles.h31}>
                                <p className={styles.p9}>Столица детского туризма,полная ярких эмоций, новых
                                    впечатлений и возможностей для семейного и школьного отдыха</p>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.divaboutcitymainContentconta}>
                        {car.map((card) => (<div key={card.id} className={styles.divaboutcitycardCard7qayo}>
                            <img
                                className={styles.imageIcon2}
                                alt=""
                                src={card.imageSrc}
                            />
                            <div className={styles.buttonWrapper}>
                                <img
                                    className={styles.buttonIcon1}
                                    alt=""
                                    src={card.buttonIconSrc}
                                />
                            </div>
                            <div className={styles.link3}>
                                <div className={styles.linkContainer}>
                                    <p className={styles.p14}>{card.title}</p>
                                    <p className={styles.p15}>{card.subtitle}</p>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </section>
            <img
                className={styles.articleImage}
                alt=""
                src="/main/article--image@2x.png"
            />
        </main>
        {showModal && (<div className={styles.modal} onClick={handleCloseModal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <span className={styles.closeButton} onClick={handleCloseModal}>&times;</span>
                <img src={modalImageSrc} className={styles.modalImage} alt="Полноэкранное изображение"/>
                <div className={styles.overlay}></div>
                <p className={styles.modalText}>{modalText}</p>
                <p className={styles.modalAdditionalText}>{modalAdditionalText}</p>
                <button className={styles.modalButton} onClick={handlePreviousStory}>Назад</button>
                <button className={styles.modalButton} onClick={handleNextStory}>Вперед</button>

            </div>
        </div>)}


        <footer className={styles.footer2}>
            <div className={styles.group}>
                <div className={styles.div14}>Контакты</div>
                <div className={styles.link8}>8 (800) 300-6-122</div>
                <div className={styles.linkPresswelcomemoscow}>
                    press@welcome.moscow
                </div>
            </div>
            <div className={styles.linkParent}>
                <div className={styles.link5}>О проекте</div>
                <div className={styles.select}>
                    <div className={styles.link6}>Вход для партнеров</div>
                    <div className={styles.image}>
                        <img
                            className={styles.linkSvg}
                            loading="lazy"
                            alt=""
                            src="/main/link--svg.svg"
                        />
                        <img className={styles.linkSvg1} alt="" src="/main/link--svg-1.svg"/>
                        <img className={styles.linkSvg2} alt="" src="/main/link--svg-2.svg"/>
                        <img className={styles.linkSvg3} alt="" src="/main/link--svg-3.svg"/>
                    </div>
                </div>
            </div>
            <div className={styles.divcopyrightsectionCopyright}>
                <img className={styles.divIcon} alt="" src="/main/div@2x.png"/>
                <div className={styles.container}>
                    <div className={styles.div15}>Политика конфиденциальности</div>
                    <div className={styles.div16}>
                        Политика обработки персональных данных
                    </div>
                </div>
            </div>
        </footer>

    </div>)
}

export default MainPage