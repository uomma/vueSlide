'use strict'

const { createApp } = Vue;

createApp({

    data() {
        return {

            movie1: {
                title: 'batman ',
                category: 'action',
                length: 180,
                imgs: [
                    'https://pad.mymovies.it/filmclub/2007/02/131/locandina.jpg',
                    'https://www.rollingstone.it/wp-content/uploads/2022/07/Cavaliere-oscuro.jpg',
                    'https://cabiriams.files.wordpress.com/2019/05/batman-begins-2005-62-g.jpg'
                ],
            },
            movie2: {
                title: 'spiderman',
                category: 'action',
                length: 160,
                imgs: [
                    'https://cdn.spaziogames.it/storage/media/2023/09/4541/marvels-spider-man-2-provato-8.jpg?width=898',
                    'https://cdn.spaziogames.it/storage/media/2023/07/3178/marvels-spider-man-2-venom.jpg?width=898',
                    'https://pad.mymovies.it/filmclub/2004/07/006/immpg5.jpg',
                ]
            }

        }
    },
    methods: {
        prevImg() {
            if (this.movie1.length < 0) {
                console.log('prev')
            }
        },
        nextImg() {
            if (this.movie1.imgs.length < this.movie1.imgs.length - 1) {
                console.log('next')
            }
        },

    }
}).mount('#app')
