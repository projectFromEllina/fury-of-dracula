$(document).ready(() => {
    (function loadList() {
        let list = [];
        let folderName = '';
        const url = window.location.href;

        switch(true) {
            case url.includes('/hunter/event-cards'): {
                folderName = 'event-cards-hunter';
                list = hunterEventCards;
            }
            break;
            case url.includes('/hunter/subjects'): {
                folderName = 'subjects';
                list = hunterSubjects;
            }
            break;
            case url.includes('/hunter/battle-cards'): {
                folderName = 'battle-cards-hunter';
                list = hunterBattleCards;
            }
            break;
            case url.includes('/dracula/event-cards'): {
                folderName = 'event-cards-dracula';
                list = draculaEventCards;
            }
            break;
            case url.includes('/dracula/collision-cards'): {
                folderName = 'collision-cards';
                list = draculaCollisionCards;
            }
            break;
            case url.includes('/dracula/battle-cards'): {
                folderName = 'battle-cards-dracula';
                list = draculaBattleCards;
            }
            break;
        }

        if(!list.length) {
            return;
        }

        list.forEach(card => {
            const cards = document.querySelector('.cards');

            const cardBlock = document.createElement('div');
            cardBlock.setAttribute('class', 'card-block');
    
            const title = document.createElement('div');
            title.setAttribute('class', 'card-block__title');
            title.innerHTML = card.titleRu + ' / ' + card.titleEn;
    
            const img = document.createElement('img');
            img.setAttribute('src', `../../../images/${folderName}/${card.imgName}`);

            cardBlock.appendChild(title);
            cardBlock.appendChild(img);
    
            cards.appendChild(cardBlock);
        })
        
    })();

    (function search() {
        const input = document.getElementById('search');
        const blocks = document.querySelectorAll('.card-block');

        if(!input) {
            return;
        }

        input.addEventListener('input', () => {
            blocks.forEach(block => {
                const value = input.value.toLowerCase();
                const title = block.querySelector('.card-block__title').innerHTML.toLowerCase();

                block.style.display = title.includes(value) ? '' : 'none';
            })
        })
    })();
})


const hunterEventCards = [
    {
        titleRu: 'За пеленой',
        titleEn: 'Behind the veil',
        imgName: 'behind-the-veil.jpg'
    },
    {
        titleRu: 'Переливание крови',
        titleEn: 'Blood transfusion',
        imgName: 'blood-transfusion.jpg'
    },
    {
        titleRu: 'Заказной поезд',
        titleEn: 'Chartered carriage',
        imgName: 'chartered-carriage.jpg'
    },
    {
        titleRu: 'Освященная земля',
        titleEn: 'Consecrated ground',
        imgName: 'consecrated-ground.jpg'
    },
    {
        titleRu: 'Путь к спасению',
        titleEn: 'Escape route',
        imgName: 'escape-route.jpg'
    },
    {
        titleRu: 'Присутствие зла',
        titleEn: 'Evil presence',
        imgName: 'evil-presence.jpg'
    },
    {
        titleRu: 'Отличная погода',
        titleEn: 'Excellent weather',
        imgName: 'excellent-weather.jpg'
    },
    {
        titleRu: 'Предостережение',
        titleEn: 'Forewarned',
        imgName: 'forewarned.jpg'
    },
    {
        titleRu: 'Удача',
        titleEn: 'Good luck',
        imgName: 'good-luck.jpg'
    },
    {
        titleRu: 'Великая сила',
        titleEn: 'Great strength',
        imgName: 'great-strength.jpg'
    },
    {
        titleRu: 'Героический рывок',
        titleEn: 'Heroic leap',
        imgName: 'heroic-leap.jpg'
    },
    {
        titleRu: 'Осведомители',
        titleEn: 'Hired scouts',
        imgName: 'hired-scouts.jpg'
    },
    {
        titleRu: 'Гипноз',
        titleEn: 'Hypnosis',
        imgName: 'hypnosis.jpg'
    },
    {
        titleRu: 'Джонатан Харкер',
        titleEn: 'Jonathan Harker',
        imgName: 'jonathan-harker.jpg'
    },
    {
        titleRu: 'Местные слухи',
        titleEn: 'Local rumours',
        imgName: 'local-rumours.jpg'
    },
    {
        titleRu: 'Длинная ночь',
        titleEn: 'Long night',
        imgName: 'long-night.jpg'
    },
    {
        titleRu: 'Удачная находка',
        titleEn: 'Lucky find',
        imgName: 'lucky-find.jpg'
    },
    {
        titleRu: 'Месть за Люси',
        titleEn: 'Lucy\'s revenge',
        imgName: 'lucys-revenge.jpg'
    },
    {
        titleRu: 'По денежному следу',
        titleEn: 'Money trail',
        imgName: 'money-trail.jpg'
    },
    {
        titleRu: 'Исследование мистических книг',
        titleEn: 'Mystic research',
        imgName: 'mystic-research.jpg'
    },
    {
        titleRu: 'Газетные сводки',
        titleEn: 'Newspaper reports',
        imgName: 'newspaper-reports.jpg'
    },
    {
        titleRu: 'Приманка',
        titleEn: 'Planned ambush',
        imgName: 'planned-ambush.jpg'
    },
    {
        titleRu: 'Второе дыхание',
        titleEn: 'Renewed vigor',
        imgName: 'renewed-vigor.jpg'
    },
    {
        titleRu: 'Руфус Смит',
        titleEn: 'Rufus Smith',
        imgName: 'rufus-smith.jpg'
    },
    {
        titleRu: 'Чувство опасности',
        titleEn: 'Sense of emergency',
        imgName: 'sense-of-emergency.jpg'
    },
    {
        titleRu: 'Сестра Агата',
        titleEn: 'Sister Agatha',
        imgName: 'sister-agatha.jpg'
    },
    {
        titleRu: 'Телеграф',
        titleEn: 'Speedy telegraph',
        imgName: 'speedy-telegraph.jpg'
    },
    {
        titleRu: 'Удивительное возвращение',
        titleEn: 'Surprising return',
        imgName: 'surprising-return.jpg'
    },
    {
        titleRu: 'Логово вампира',
        titleEn: 'Vampire lair',
        imgName: 'vampire-lair.jpg'
    },
    {
        titleRu: 'Восковые цилиндры',
        titleEn: 'Wax cylinders',
        imgName: 'wax-cylinders.jpg'
    }
];

const hunterSubjects = [
    {
        titleRu: 'Распятие',
        titleEn: 'Crucifix',
        imgName: 'crucifix.jpg'
    },
    {
        titleRu: 'Псы',
        titleEn: 'Dogs',
        imgName: 'dogs.jpg'
    },
    {
        titleRu: 'Резвые скакуны',
        titleEn: 'Fast horses',
        imgName: 'fast-horses.jpg'
    },
    {
        titleRu: 'Чеснок',
        titleEn: 'Garlic',
        imgName: 'garlic.jpg'
    },
    {
        titleRu: 'Чесночные бусы',
        titleEn: 'Garlic wreath',
        imgName: 'garlic-wreath.jpg'
    },
    {
        titleRu: 'Облатки причастия',
        titleEn: 'Heavenly host',
        imgName: 'heavenly-host.jpg'
    },
    {
        titleRu: 'Освященные пули',
        titleEn: 'Holy bullets',
        imgName: 'holy-bullets.jpg'
    },
    {
        titleRu: 'Защитный круг',
        titleEn: 'Holy circle',
        imgName: 'holy-circle.jpg'
    },
    {
        titleRu: 'Нож',
        titleEn: 'Knife',
        imgName: 'knife.jpg'
    },
    {
        titleRu: 'Пистолет',
        titleEn: 'Pistol',
        imgName: 'pistol.jpg'
    },
    {
        titleRu: 'Ружье',
        titleEn: 'Rifle',
        imgName: 'rifle.jpg'
    },
    {
        titleRu: 'Кол',
        titleEn: 'Stake',
        imgName: 'stake.jpg'
    }
];
const hunterBattleCards = [
    {
        titleRu: 'Удар',
        titleEn: 'Punch',
        imgName: 'punch.jpg'
    },
    {
        titleRu: 'Уклонение',
        titleEn: 'Dodge',
        imgName: 'dodge.jpg'
    },
    {
        titleRu: 'Бегство',
        titleEn: 'Escape',
        imgName: 'escape.jpg'
    }
];
const draculaEventCards = [
    {
        titleRu: 'Таможенный досмотр',
        titleEn: 'Customs search',
        imgName: 'customs-search.jpg'
    },
    {
        titleRu: 'Тьма возвращается',
        titleEn: 'Darkness returns',
        imgName: 'darkness-returns.jpg'
    },
    {
        titleRu: 'Дьявольская сила',
        titleEn: 'Devilish power',
        imgName: 'devilish-power.jpg'
    },
    {
        titleRu: 'Невесты Дракулы',
        titleEn: 'Dracula\'s brides',
        imgName: 'draculas-brides.jpg'
    },
    {
        titleRu: 'Звериная ярость',
        titleEn: 'Enraged',
        imgName: 'Enraged.jpg'
    },
    {
        titleRu: 'Ложные сведения',
        titleEn: 'False tip',
        imgName: 'false-tip.jpg'
    },
    {
        titleRu: 'Исполинский волк',
        titleEn: 'Great wolf',
        imgName: 'great-wolf.jpg'
    },
    {
        titleRu: 'Cкрытые планы',
        titleEn: 'Hidden schemes',
        imgName: 'hidden-schemes.jpg'
    },
    {
        titleRu: 'Иммануэль Хильдесхайм',
        titleEn: 'Immanuel Hildesheim',
        imgName: 'immanuel-hildesheim.jpg'
    },
    {
        titleRu: 'Ночной визит',
        titleEn: 'Nocturnal visit',
        imgName: 'nocturnal-visit.jpg'
    },
    {
        titleRu: 'Дорожный блокпос',
        titleEn: 'Roadblock',
        imgName: 'roadblock.jpg'
    },
    {
        titleRu: 'Соблазнение',
        titleEn: 'Seduction',
        imgName: 'seduction.jpg'
    },
    {
        titleRu: 'Желтая пресса',
        titleEn: 'Sensationalist press',
        imgName: 'sensationalist-press.jpg'
    },
    {
        titleRu: 'Призыв шторма',
        titleEn: 'Summon storms',
        imgName: 'summon-storms.jpg'
    },
    {
        titleRu: 'Неестественная прыть',
        titleEn: 'Unearthly swiftness',
        imgName: 'unearthly-swiftness.jpg'
    },
    {
        titleRu: 'Подавление воли',
        titleEn: 'Vampiric influence',
        imgName: 'vampiric-influence.jpg'
    },
    {
        titleRu: 'Обезумевшие лошади',
        titleEn: 'Wild horses',
        imgName: 'wild-horses.jpg'
    }
];

const draculaCollisionCards = [
    {
        titleRu: 'Знатный вампир',
        titleEn: 'Aristocratic vampire',
        imgName: 'aristocratic-vampire.jpg'
    },
    {
        titleRu: 'Летучие мыши',
        titleEn: 'Bats',
        imgName: 'bats.jpg'
    },
    {
        titleRu: 'Оскверненная земля',
        titleEn: 'Desecrated soil',
        imgName: 'desecrated-soil.jpg'
    },
    {
        titleRu: 'Мистификация',
        titleEn: 'Hoax',
        imgName: 'hoax.jpg'
    },
    {
        titleRu: 'Новый вампир',
        titleEn: 'New vampire',
        imgName: 'new-vampire.jpg'
    },
    {
        titleRu: 'Крысы',
        titleEn: 'Rats',
        imgName: 'rats.jpg'
    },
    {
        titleRu: 'Безумный вампир',
        titleEn: 'Reckless vampire',
        imgName: 'reckless-vampire.jpg'
    },
    {
        titleRu: 'Диверсант',
        titleEn: 'Saboteur',
        imgName: 'saboteur.jpg'
    },
    {
        titleRu: 'Шпион',
        titleEn: 'Spy',
        imgName: 'spy.jpg'
    },
    {
        titleRu: 'Цыганские стражи',
        titleEn: 'Szgany bodyguards',
        imgName: 'szgany-bodyguards.jpg'
    },
    {
        titleRu: 'Цыганский табор',
        titleEn: 'Szgany Mob',
        imgName: 'szgany-mob.jpg'
    },
    {
        titleRu: 'Таинственный туман',
        titleEn: 'Unnatural fog',
        imgName: 'unnatural-fog.jpg'
    },
    {
        titleRu: 'Волки',
        titleEn: 'Wolves',
        imgName: 'wolves.jpg'
    }
];

const draculaBattleCards = [
    {
        titleRu: 'Когти',
        titleEn: 'Claws',
        imgName: 'claws.jpg'
    },
    {
        titleRu: 'Бегство нетопырем',
        titleEn: 'Escape as bat',
        imgName: 'escape-as-bat.jpg'
    },
    {
        titleRu: 'Бегство туманом',
        titleEn: 'Escape as mist',
        imgName: 'escape-as-mist.jpg'
    },
    {
        titleRu: 'Клыки',
        titleEn: 'Fangs',
        imgName: 'fangs.jpg'
    },
    {
        titleRu: 'Очаровать',
        titleEn: 'Mesmerize',
        imgName: 'mesmerize.jpg'
    },
    {
        titleRu: 'Западня',
        titleEn: 'Plotting',
        imgName: 'plotting.jpg'
    },
    {
        titleRu: 'Мощь',
        titleEn: 'Strength',
        imgName: 'strength.jpg'
    }
];