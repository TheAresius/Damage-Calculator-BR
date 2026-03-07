window.enemyData = {
    "0": {
        name: "Monstro normal",
        description: "Esses são os monstros mais comuns encontrados pelo jogo.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: ""
        },
        extra: "-",
        path: 'images/monsters/general monster.png',
        IsBoss: true
    },

    "1": {
        name: "Gorgos da Escuridão (1F)",
        description: stringIsBoss + "Está presente no primeiro estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>900k (37 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png',
        IsBoss: true
    },

    "2": {
        name: "Essência Maligna do Gadosen (2F)",
        description: stringIsBoss + "Está presente no segundo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.88M (72 barras)</span>" + stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/gadosen 1.png',
        IsBoss: true
    },

    "3": {
        name: "Alma da Feiticeira Kamiki (3F)",
        description: stringIsBoss + "Está presente no terceiro estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.80M (72 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/kamiki 1.png',
        IsBoss: true
    },

    "4": {
        name: "Espírito do Samurai Gaikoz (4F)",
        description: stringIsBoss + "Está presente no quarto estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.89M (76 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/gaikoz 1.png',
        IsBoss: true
    },

    "5": {
        name: "Cazeaje (5F)",
        description: stringIsBoss + "Está presente no quinto estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>6.00M (241 barras)</span>."
        },
        extra: "- De tempos em tempos Cazeaje irá se teleportar para o centro do mapa e começará a acumular energia. Um conjunto de marcas aparecerá no chão indicando a sequência do ataque.<br>"+
               "- Se você usar skills enquanto ela concentra energia, você poderá causar delay no ataque e acabar matando os membros do grupo.",
        path: 'images/monsters/cazeaje.png',
        IsBoss: true
    },

    "6": {
        name: "Gorgos da Escuridão (6F)",
        description: stringIsNotBoss + "Está presente no sexto estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.26M</span>" + stringScaleHP
        },
        extra: "- É necessário remover apenas 75% do HP para derrotá-lo.",
        path: 'images/monsters/gorgos 2.png',
        IsBoss: false
    },

    "17": {
        name: "Gorgos Gigante da Escuridão (6F)",
        description: stringIsBoss + "Está presente no sexto estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.46M (139 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png',
        IsBoss: true
    },

    "7": {
        name: "Espírito do Samurai Gaikoz (7F)",
        description: "Apenas os dois Gaikoz invocados são considerados um chefe. Está presente no sétimo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.89M</span>" + stringScaleHP
        },
        extra: "- É necessário remover apenas 50% do HP para derrotá-lo.",
        path: 'images/monsters/gaikoz 2.png',
        IsBoss: false
    },

    "16": {
        name: "Espírito do Samurai Gaikoz (7F)",
        description: "Apenas os dois Gaikoz invocados são considerados um chefe. Está presente no sétimo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>4.15M (167 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/gaikoz 1.png',
        IsBoss: true
    },

    "15": {
        name: "Alma da Feiticeira Kamiki (8F)",
        description: "Apenas as duas Kamiki invocadas são consideradas um chefe. Está presente no oitavo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.52M</span>" + stringScaleHP
        },
        extra: "- Kamiki utilizará uma névoa congelante a cada 20 segundos em uma região demarcada no mapa. Essa névoa removerá seu HP rapidamente.",
        path: 'images/monsters/kamiki 2.png',
        IsBoss: false
    },

    "8": {
        name: "Alma da Feiticeira Kamiki (8F)",
        description: "Apenas as duas Kamiki invocadas são consideradas um chefe. Está presente no oitavo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.52M (141 barras)</span>."
        },
        extra: "- Kamiki utilizará uma névoa congelante a cada 20 segundos em uma região demarcada no mapa. Essa névoa removerá seu HP rapidamente.",
        path: 'images/monsters/kamiki 1.png',
        IsBoss: true
    },

    "34": {
        name: "Essência Maligna do Gadosen (9F)",
        description: "Apenas os dois Gadosen invocados são considerados um chefe. Está presente no nono estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.97M</span>" + stringScaleHP
        },
        extra: "- É necessário remover apenas 60% do HP para derrotá-lo.",
        path: 'images/monsters/gadosen 2.png',
        IsBoss: false
    },

    "9": {
        name: "Essência Maligna do Gadosen (9F)",
        description: "Apenas os dois Gadosen invocados são considerados um chefe. Está presente no nono estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>8.81M (353 barras)</span>."
        },
        extra: "- Gadosen usará sua mecânica de 'absorção de alma' a cada 40 segundos. Se você estiver na área vermelha você morrerá, não importa o quê faça.",
        path: 'images/monsters/gadosen 1.png',
        IsBoss: true
    },

    "10": {
        name: "Cazeaje (10F)",
        description: stringIsBoss + "Está presente no décimo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>55.18M (2401 barras)</span>."
        },
        extra: "- De tempos em tempos Cazeaje irá se teleportar para o centro do mapa e começará a acumular energia. Um conjunto de marcas aparecerá no chão indicando a sequência do ataque.<br>"+
               "- Se você usar skills enquanto ela concentra energia, você poderá causar delay no ataque e acabar matando os membros do grupo.",
        path: 'images/monsters/cazeaje.png',
        IsBoss: true
    },

    "11": {
        name: "Berkas (corpo)",
        description: stringIsBoss + "Está presente na raid Covil de Berkas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>7.65M (307 barras)</span>" + stringScaleHP
        },
        extra: "- Devido ao seu tamanho, Berkas possui muitas regiões de hitbox e o dano causado a ele é dividido entre corpo e patas. <br>"+
               "- O dano causado nas patas é reduzido em 60%<br>"+
               "- Seu dano é reduzido em 66% sem o supressor",
        path: 'images/monsters/berkas.png',
        IsBoss: true
    },

    "12": {
        name: "Berkas (patas)",
        description: stringIsBoss + "Está presente na raid Covil de Berkas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>40.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>40.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>53.12%</span>",
            health: stringEstHP + "<span class='yellow'>7.65M (307 barras)</span>" + stringScaleHP
        },
        extra: "- Devido ao seu tamanho, Berkas possui muitas regiões de hitbox e o dano causado a ele é dividido entre corpo e patas. <br>"+
               "- O dano causado nas patas é reduzido em 60%<br>"+
               "- Seu dano é reduzido em 66.66% sem o supressor",
        path: 'images/monsters/berkas.png',
        IsBoss: true
    },

    "13": {
        name: "Harkyon (corpo)",
        description: stringIsBoss + "Está presente na Terra do Julgamento.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>30.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>30.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>690.00M</span>."
        },
        extra: "- Harkyon possui duas regiões de dano, seu corpo e suas patas.<br>"+
               "- O dano causado nas patas é reduzido em 80%.",
        path: 'images/monsters/harkyon.png',
        IsBoss: true
    },

    "14": {
        name: "Harkyon (patas)",
        description: stringIsBoss + "Está presente na Terra do Julgamento.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>86.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>86.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>88.00%</span>",
            health: stringEstHP + "<span class='yellow'>690.00M</span>."
        },
        extra: "- Harkyon possui duas regiões de dano, seu corpo e suas patas.<br>"+
               "- O dano causado nas patas é reduzido em 80%.",
        path: 'images/monsters/harkyon.png',
        IsBoss: true
    },

    "18": {
        name: "Devorador do Vazio",
        description: stringIsBoss + "Está presente na raid Vazio (Invasão).<br>"+
                     "Há um debuff de 20% de contaminação neste calabouço. O debuff já está aplicado automaticamente na calculadora.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- 1° fase <span class='yellow'>16.72M (669 barras)</span></span>.<br>"+
                        "<span class='tab'>- 2° fase <span class='yellow'>25.08M (1003 barras)</span></span>.<br>"+
                        "<span class='tab'>- 3° fase <span class='yellow'>66.85M (2674 barras)</span></span>.<br>"+
                        "<span class='tab'>- 4° fase <span class='yellow'>93.58M (3743 barras)</span></span>."
        },
        extra: "- Nas fases 3 e 4 o chefe utilizará a mecânica 'breath' após 70 segundos do início do stage. <br>"+
               "- Para interromper a mecânica é necessário causar 2M de dano na fase 3 e 3.2M de dano na fase 4.",
        path: 'images/monsters/devourer.png',
        IsBoss: true
    },

    "19": {
        name: "Sentinela/Demolidor do Vazio",
        description: stringIsNotBoss + "Está presente na raid Vazio (Contaminação).<br>"+
                     "Há um debuff de 20% de contaminação neste calabouço. O debuff já está aplicado automaticamente na calculadora.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                    "<span class='tab'>- Sentinela do Vazio: <span class='yellow'>124k</span></span>.<br>"+
                    "<span class='tab'>- Demolidor do Vazio: <span class='yellow'>672k</span></span>."
        },
        extra: "-",
        path: 'images/monsters/crusher.png',
        IsBoss: false
    },

    "20": {
        name: "Executor do Vazio",
        description: stringIsNotBoss + "Está presente na raid Vazio (Invasão) a partir da 2° fase.<br>"+
                                       "Há um debuff de 20% de contaminação neste calabouço. O debuff já está aplicado automaticamente na calculadora.<br>"+
                                       "O buff adquirido do Executor do Vazio, presente nas fases 2, 3 e 4 é de <span class='yellow'>200%</span>. Adicione esse valor através do botão '+', caso deseje.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- 2° fase <span class='yellow'>2.51M</span></span>.<br>"+
                        "<span class='tab'>- 3° fase <span class='yellow'>4.36M</span></span>.<br>"+
                        "<span class='tab'>- 4° fase <span class='yellow'>6.00M</span></span>."
        },
        extra: "- O inimigo usará a mecânica de 'casting' 60 segundos após ser derrotado pela primeira vez, nas fases 3 e 4.<br>"+
               "- 5 segundos após nascer novamente o inimigo usará a mecânica de casting.<br>"+
               "- É necessário causar 1M de dano para interromper a mecânica.<br>"+
               "- Não é possível causar dano de ataque pelas costas a ele.",
        path: 'images/monsters/enforcer.png',
        IsBoss: false
    },

    "21": {
        name: "Observador do Vazio",
        description: stringIsBoss + "Está presente na raid Vazio (Invasão) a partir da 2° fase. <br>"+
                                       "Há um debuff de 20% de contaminação neste calabouço. O debuff já está aplicado automaticamente na calculadora.<br>"+
                                       "O buff adquirido do Executor do Vazio, presente nas fases 2, 3 e 4 é de <span class='yellow'>200%</span>. Adicione esse valor através do botão '+', caso deseje.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: " - HP (estimado):<br>"+
                        "<span class='tab'>- 2° fase <span class='yellow'>25.08M (1003 barras)</span></span>.<br>"+
                        "<span class='tab'>- 3° fase <span class='yellow'>50.12M (2005 barras)</span></span>.<br>"+
                        "<span class='tab'>- 4° fase <span class='yellow'>70.18M (2807 barras)</span></span>."
        },
        extra: "- A cada 60 segundos o inimigo utilizará a mecânica de casting.<br>"+
               "- É necessário causar 2M de dano para interromper a mecânica na fase 3 e 3M de dano na fase 4.<br>"+
               "- Não é possível causar dano de ataque pelas costas a ele.",
        path: 'images/monsters/gazer.png',
        IsBoss: true
    },

    "22": {
        name: "Rofnus",
        description: stringIsNotBoss + "Está presente no primeiro estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>23.08%</span>",
            defense2: stringDef2 + "<span class='yellow'>23.08%</span>",
            defense3: stringDef3 + "<span class='yellow'>39.90%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>."
        },
        extra: "- Quando estiver abaixo de 66% de HP, Rofnus poderá entrar no estado de fúria e recuperar até 33% de HP total.<br>"+
               "- Rofnus fica mais suscetível a dano quando está recuperando HP. Seu dano final é aumentado em 30% contra ele.",
        path: 'images/monsters/rofnus.png',
        IsBoss: false
    },

    "23": {
        name: "Rofnus com recuperação de HP",
        description: stringIsNotBoss + "Está presente no primeiro estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>"
        },
        extra: "- Quando estiver abaixo de 66% de HP, Rofnus poderá entrar no estado de fúria e recuperar até 33% de HP total.<br>"+
               "- Rofnus fica mais suscetível a dano quando está recuperando HP. Seu dano final é aumentado em 30% contra ele.",
        path: 'images/monsters/rofnus.png',
        IsBoss: false
    },

    "24": {
        name: "Skeram",
        description: stringIsNotBoss + "Está presente no segundo estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>10.00M</span>"
        },
        extra: "- Skeram absorverá 5% do seu HP total para cada uma de suas formigas que forem derrotadas.",
        path: 'images/monsters/skeram.png',
        IsBoss: false
    },

    "25": {
        name: "Bruxa do Caos",
        description: stringIsNotBoss + "Está presente no terceiro estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- Quando sem nenhuma proteção, a Bruxa do Caos recebe 25% de dano a mais proveniente de ataques normais e de pet, em comparação com inimigos com a mesma defesa.<br>"+
               "- Ao invocar a <span class='purple'>proteção roxa</span>, a Bruxa do Caos recebe 100% de dano a mais proveniente de ataques normais e de pet, e reduz o dano proveniente de habilidades em 73%. <br>"+
               "- Ao invocar a <span class='red'>proteção vermelha</span>, a Bruxa do Caos reduz o dano proveniente de ataques normais e de pet em 66% e recebe 60% de dano a mais proveniente de habilidades.<br>"+
               "- Se a Bruxa do Caos não for derrotada em até 90 segundos ela renascerá com o 100% do HP.",
        path: 'images/monsters/dekane.png',
        IsBoss: false
    },

    "26": {
        name: "Bruxa do Caos (proteção Roxa)",
        description: stringIsNotBoss + "Está presente no terceiro estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- Quando sem nenhuma proteção, a Bruxa do Caos recebe 25% de dano a mais proveniente de ataques normais e de pet, em comparação com inimigos com a mesma defesa.<br>"+
               "- Ao invocar a <span class='purple'>proteção roxa</span>, a Bruxa do Caos recebe 100% de dano a mais proveniente de ataques normais e de pet, e reduz o dano proveniente de habilidades em 73%. <br>"+
               "- Ao invocar a <span class='red'>proteção vermelha</span>, a Bruxa do Caos reduz o dano proveniente de ataques normais e de pet em 66% e recebe 60% de dano a mais proveniente de habilidades.<br>"+
               "- Se a Bruxa do Caos não for derrotada em até 90 segundos ela renascerá com o 100% do HP.",
        path: 'images/monsters/dekane.png',
        IsBoss: false
    },

    "27": {
        name: "Bruxa do Caos (proteção vermelha)",
        description: stringIsNotBoss + "Está presente no terceiro estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>58.34%</span>",
            defense2: stringDef2 + "<span class='yellow'>58.34%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>9.50M</span>"
        },
        extra: "- Quando sem nenhuma proteção, a Bruxa do Caos recebe 25% de dano a mais proveniente de ataques normais e de pet, em comparação com inimigos com a mesma defesa.<br>"+
               "- Ao invocar a <span class='purple'>proteção roxa</span>, a Bruxa do Caos recebe 100% de dano a mais proveniente de ataques normais e de pet, e reduz o dano proveniente de habilidades em 73%. <br>"+
               "- Ao invocar a <span class='red'>proteção vermelha</span>, a Bruxa do Caos reduz o dano proveniente de ataques normais e de pet em 66% e recebe 60% de dano a mais proveniente de habilidades.<br>"+
               "- Se a Bruxa do Caos não for derrotada em até 90 segundos ela renascerá com o 100% do HP.",
        path: 'images/monsters/dekane.png',
        IsBoss: false
    },

    "28": {
        name: "Duel Pon Zec, o Vingador",
        description: stringIsBoss + "Está presente no último estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>16.10M (644 barras)</span>"
        },
        extra: "- Após ~45 segundos, Duel executará a mecânica de 'casting' até três vezes seguidas, sendo necessário causar 1.7M de dano em até 9 segundos para interrompê-lo.<br>"+
               "- Se Duel não for interrompido ele realizará um ataque poderoso e voltará ao padrão usual de ataques.<br>"+
               "- Ao interrompê-lo três vezes seguidas, Duel ficará enfraquecido e receberá 50% de dano a mais durante 9 segundos (extendível com congelamento/frame freeze).",
        path: 'images/monsters/duel.png',
        IsBoss: true
    },

    "29": {
        name: "Duel Pon Zec, o Vingador (enfraquecido)",
        description: stringIsBoss + "Está presente no último estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<span class='yellow'>16.10M (644 barras)</span>"
        },
        extra: "- Após ~45 segundos, Duel executará a mecânica de 'casting' até três vezes seguidas, sendo necessário causar 1.7M de dano para interrompê-lo.<br>"+
               "- Se Duel não for interrompido ele realizará um ataque poderoso e voltará ao padrão usual de ataques.<br>"+
               "- Ao interrompê-lo três vezes seguidas, Duel ficará enfraquecido e receberá 50% de dano a mais durante 9 segundos (extendível com congelamento/frame freeze)..",
        path: 'images/monsters/duel.png',
        IsBoss: true
    },

    "30": {
        name: "Periett",
        description: stringIsNotBoss + "Está presente no andar 15 da Torre das Ilusões.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>5.64M</span>"
        },
        extra: "-",
        path: 'images/monsters/periett.png',
        IsBoss: false
    },

    "31": {
        name: "Thanatos",
        description: stringIsNotBoss + "Está presente no andar 24 da Torre das Ilusões.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>15.38M</span>"
        },
        extra: "-",
        path: 'images/monsters/thanatos.png',
        IsBoss: false
    },

    "32": {
        name: "Evilis",
        description: stringIsNotBoss + "Está presente no andar 24 da Torre das Ilusões.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>8.47M</span>"
        },
        extra: "- Aleatoriamente Evilis poderá defender seu ataque e reduzir seu dano em 99.9%.",
        path: 'images/monsters/evilis.png',
        IsBoss: false
    },

    "33": {
        name: "Caxias Grandiel",
        description: stringIsBoss + "Está presente no andar 30 da Torre das Ilusões.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>17.42M (697 barras)</span>"
        },
        extra: "- Quando Grandiel estiver abaixo de 80% de HP ele poderá invocar Drall e Vairne, que atacarão simultaneamente. Será necessário derrotá-los para que Grandiel possa receber dano.<br>"+
               "- Após derrotar Drall e Vairne, e quando estiver abaixo de 50% de HP, Grandiel poderá invocar 5 clones, que atacarão simultaenamente.",
        path: 'images/monsters/grandiel.png',
        IsBoss: true
    },

    "35": {
        name: "Guardião do Templo",
        description: stringIsNotBoss + "Está presente no Templo do Tempo.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>2.81M</span>" + stringScaleHP
        },
        extra: "- Quando estiver abaixo de 95% de HP, o Guardião do Templo poderá ficar invencível e invocar dois golens no mapa. Você terá 12 segundos para derrotá-los.<br>"+
               "- Ao derrotar os golens, o Guardião do Templo receberá 566% de dano a mais durante 10 segundos.",
        path: 'images/monsters/guardiao.png',
        IsBoss: false
    },
    
    "36": {
        name: "Guardião do Templo (enfraquecido)",
        description: stringIsNotBoss + "Está presente no Templo do Tempo.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>2.81M</span>" + stringScaleHP
        },
        extra: "- Quando estiver abaixo de 95% de HP, o Guardião do Templo poderá ficar invencível e invocar dois golens no mapa. Você terá 12 segundos para derrotá-los.<br>"+
               "- Ao derrotar os golens, o Guardião do Templo receberá 566% de dano a mais durante 10 segundos.",
        path: 'images/monsters/guardiao.png',
        IsBoss: false
    },

    "37": {
        name: "A Divindade Corrompida Gaian",
        description: stringIsBoss + "Está presente no Templo do Tempo.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>20.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>20.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>37.50%</span>",
            health: stringEstHP + "<span class='yellow'>1.29M (52 barras)</span>" + stringScaleHP
        },
        extra: "- Quando estiver abaixo de 66% de HP, Gaian poderá invocar seus golens pelo mapa. Você terá 12 segundos para derrotá-los.<br>"+
               "- Ao derrotar os golens, Gaian ficará paralizado durante 10 segundos e receberá 150% de dano a mais.",
        path: 'images/monsters/gaian.png',
        IsBoss: true
    },

    "38": {
        name: "A Divindade Corrompida Gaian (enfraquecido)",
        description: stringIsBoss + "Está presente no Templo do Tempo.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.29M (52 barras)</span>" + stringScaleHP
        },
        extra: "- Quando estiver abaixo de 66% de HP, Gaian poderá invocar seus golens pelo mapa. Você terá 12 segundos para derrotá-los.<br>"+
               "- Ao derrotar os golens, Gaian ficará paralizado durante 10 segundos e receberá 150% de dano a mais.",
        path: 'images/monsters/gaian.png',
        IsBoss: true
    },

    "39": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "40": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "41": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "42": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "43": {
        name: "",
        description: "",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + ""
        },
        extra: "-",
        path: '',
        IsBoss: false
    },

    "44": {
        name: "Coração do Absoluto - parte de baixo do mapa",
        description: stringIsNotBoss + "Está presente na parte inferior do primeiro estágio do Vazio (Pesadelo).<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo.</b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>90.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>90.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>2.10M </span>"
        },
        extra: "- O Coração do Absoluto irá invocar diversos monstros enquanto estiver vivo. É necessário derrotar 5 'Invasores do Vazio' para que o inimigo '???' comece a carregar energia e disparar contra o Coração do Absoluto.<br>"+
               "- Enquanto estiver sendo atacado, o Coração do Vazio irá perder sua defesa e receberá muito mais dano de habilidades.",
        path: 'images/monsters/heart 1.png',
        IsBoss: false
    },

    "45": {
        name: "Coração do Absoluto (enfraquecido) - parte de baixo do mapa ",
        description: stringIsNotBoss + "Está presente na parte inferior do primeiro estágio do Vazio (Pesadelo).<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>70.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>70.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>28.26%</span>",
            health: stringEstHP + "<span class='yellow'>2.10M </span>"
        },
        extra: "- O Coração do Absoluto irá invocar diversos monstros enquanto estiver vivo. É necessário derrotar 5 'Invasores do Vazio' para que o inimigo '???' comece a carregar energia e disparar contra o Coração do Absoluto.<br>"+
               "- Enquanto estiver sendo atacado, o Coração do Vazio irá perder sua defesa e receberá muito mais dano de habilidades.",
        path: 'images/monsters/heart 1.png',
        IsBoss: false
    },

    "46": {
        name: "Coração do Absoluto - parte de cima do mapa",
        description: stringIsNotBoss + "Está presente na parte superior do primeiro estágio do Vazio (Pesadelo).<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>90.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>90.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>7.30M </span>"
        },
        extra: "- O Coração do Absoluto irá invocar diversos monstros enquanto estiver vivo. É necessário derrotar 5 'Invasores do Vazio' para que o inimigo '???' comece a carregar energia e disparar contra o Coração do Absoluto.<br>"+
               "- Enquanto estiver sendo atacado, o Coração do Vazio irá perder sua defesa e receberá muito mais dano de habilidades.",
        path: 'images/monsters/heart 2.png',
        IsBoss: false
    },

    "47": {
        name: "Coração do Absoluto (enfraquecido) - parte de cima do mapa",
        description: stringIsNotBoss + "Está presente na parte superior do primeiro estágio do Vazio (Pesadelo).<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>70.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>70.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>28.26%</span>",
            health: stringEstHP + "<span class='yellow'>7.30M </span>"
        },
        extra: "- O Coração do Absoluto irá invocar diversos monstros enquanto estiver vivo. É necessário derrotar 5 'Invasores do Vazio' para que o inimigo '???' comece a carregar energia e disparar contra o Coração do Absoluto.<br>"+
               "- Enquanto estiver sendo atacado, o Coração do Vazio irá perder sua defesa e receberá muito mais dano de habilidades.",
        path: 'images/monsters/heart 2.png',
        IsBoss: false
    },

    "48": {
        name: "Apóstolo do Vazio (Absoluto) - 2F",
        description: stringIsBoss + "Está presente no segundo estágio do Vazio (Pesadelo).<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>6.58M (263 barras)</span>"
        },
        extra: "- De tempos em tempos o Apóstolo irá invocar uma aura roxa no mapa. Durante esse período o Apóstolo ficará parado e suscetível a dano, porém os jogadores que estiverem dentro da aura também invocarão diversos espinhos por onde estiverem.<br><br>"+
               "- Após ~1:30 do início do estágio o Apóstolo irá utilizar a mecânica de Danger, que invocará diversas esferas em sequência pelo mapa. Durante este período o Apóstolo deixará o mapa e não será possível causar dano a ele.<br>",
        path: 'images/monsters/apostle 1.png',
        IsBoss: true
    },

    "49": {
        name: "Apóstolo do Vazio (Absoluto) - 3F",
        description: stringIsBoss + "Está presente no terceiro estágio do Vazio (Pesadelo).<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>14.92M (597 barras)</span>"
        },
        extra: "- De tempos em tempos o Apóstolo irá se teleportar para o canto direito (se ele estiver do lado esquerdo do mapa) ou para o canto esquerdo (se ele estiver do lado direito do mapa) e começará a disparar uma onda de energia. Durante esse período o Apóstolo ficará parado e muito vulnerável a dano.<br><br>"+
               "- O Apóstolo poderá utilizar a mecânica de Danger. Um vento soprará para a esquerda ou para a direita, indicando o lado para o qual o boss voará enquanto causa uma grande quantidade de dano. Se ele voar para a esquerda ele ficará parado na plataforma de baixo; se voar para a direita ele ficará parado na plataforma de cima.<br><br>"+
               "- Após realizar a mecânica de teleporte duas vezes o Apóstolo poderá utilizar a mecânica de 'Summon' e deixará o mapa até que os 'Observadores do Vazio' sejam derrotados. Após serem derrotados eles invocarão uma orbe de buff de dano e o Apóstolo ficará vulnerável por ~15 segundos.<br><br>"+
               "- O buff adquirido ao derrotar os Observadores do Vazio é de <span class='yellow'>150%</span>. Adicione esse valor ao \"Outros Buffs\", caso deseje.<br><br>"+
               "- Se o Apóstolo for derrotado antes da mecânica de 'Summon' será possível acessar o estágio oculto (4F) do Vazio (Pesadelo).",
        path: 'images/monsters/apostle 2.png',
        IsBoss: true
    },

    "50": {
        name: "Apóstolo do Vazio (Absoluto) - 4F",
        description: stringIsBoss + "Está presente no estágio oculto (4F) do Vazio (Pesadelo). Só é possível acessar o estágio oculto caso o estágio 3 seja concluido antes da mecânica de 'Summon'.<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>35.82M (1433 barras)</span>"
        },
        extra: "- O Apóstolo do Vazio ficará parado concentrando energia e causando uma pequena quantidade de dano. Se ele não for derrotado em 1 minuto a raid irá falhar automaticamente.<br><br>"+
               "- A cada 10 segundos o Apóstolo invocará orbes de buffs pelo mapa. As orbes ficarão disponíveis durante 10 segundos e concedem um buff específico até que elas sumam do mapa.<br><br>"+
               "- Orbe Azul: reduz o cooldown de todas as habilidades em 20 segundos, recupera duas barras de MP e faz com que o Apóstolo receba 400% de dano a mais de todas as habilidades (não é considerado um buff, mas sim um aumento direto do dano recebido pelo boss).<br><br>"+
               "- Orbe Vermelha: recupera 1000 de HP e faz com que o Apóstolo receba 900% de dano a mais de comandos básicos e pet (não é considerado um buff, mas sim um aumento direto do dano recebido pelo boss).",
        path: 'images/monsters/apostle 3.png',
        IsBoss: true
    },

    "51": {
        name: "Apóstolo do Vazio (Absoluto) - 4F (Orbe Azul)",
        description: stringIsBoss + "Está presente no estágio oculto (4F) do Vazio (Pesadelo). Só é possível acessar o estágio oculto caso o estágio 3 seja concluido antes da mecânica de 'Summon'.<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>35.82M (1433 barras)</span>"
        },
        extra: "- O Apóstolo do Vazio ficará parado concentrando energia e causando uma pequena quantidade de dano. Se ele não for derrotado em 1 minuto a raid irá falhar automaticamente.<br><br>"+
               "- A cada 10 segundos o Apóstolo invocará orbes de buffs pelo mapa. As orbes ficarão disponíveis durante 10 segundos e concedem um buff específico até que elas sumam do mapa.<br><br>"+
               "- Orbe Azul: reduz o cooldown de todas as habilidades em 20 segundos, recupera duas barras de MP e faz com que o Apóstolo receba 400% de dano a mais de todas as habilidades (não é considerado um buff, mas sim um aumento direto do dano recebido pelo boss).<br><br>"+
               "- Orbe Vermelha: recupera 1000 de HP e faz com que o Apóstolo receba 900% de dano a mais de comandos básicos e pet (não é considerado um buff, mas sim um aumento direto do dano recebido pelo boss).",
        path: 'images/monsters/apostle 3.png',
        IsBoss: true
    },

    "52": {
        name: "Apóstolo do Vazio (Absoluto) - 4F (Orbe Vermelha)",
        description: stringIsBoss + "Está presente no estágio oculto (4F) do Vazio (Pesadelo). Só é possível acessar o estágio oculto caso o estágio 3 seja concluido antes da mecânica de 'Summon'.<br><b>Apenas alguns debuffs conseguem quebrar a defesa deste inimigo. </b>",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.18%</span>",
            health: stringEstHP + "<span class='yellow'>35.82M (1433 barras)</span>"
        },
        extra: "- O Apóstolo do Vazio ficará parado concentrando energia e causando uma pequena quantidade de dano. Se ele não for derrotado em 1 minuto a raid irá falhar automaticamente.<br><br>"+
               "- A cada 10 segundos o Apóstolo invocará orbes de buffs pelo mapa. As orbes ficarão disponíveis durante 10 segundos e concedem um buff específico até que elas sumam do mapa.<br><br>"+
               "- Orbe Azul: reduz o cooldown de todas as habilidades em 20 segundos, recupera duas barras de MP e faz com que o Apóstolo receba 400% de dano a mais de todas as habilidades (não é considerado um buff, mas sim um aumento direto do dano recebido pelo boss).<br><br>"+
               "- Orbe Vermelha: recupera 1000 de HP e faz com que o Apóstolo receba 900% de dano a mais de comandos básicos e pet (não é considerado um buff, mas sim um aumento direto do dano recebido pelo boss).",
        path: 'images/monsters/apostle 3.png',
        IsBoss: true
    },

    "53": {
        name: "Astaroth, o Criador (canto)",
        description: stringIsNotBoss + "Está presente no primeiro estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>8.95M</span>"
        },
        extra: "-",
        path: 'images/monsters/astaroth cloister.png',
        IsBoss: false
    },

    "54": {
        name: "Astaroth, o Criador (meio)",
        description: stringIsNotBoss + "Está presente no primeiro estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>22.31M</span>"
        },
        extra: "-",
        path: 'images/monsters/astaroth cloister.png',
        IsBoss: false
    },

    "55": {
        name: "Dragão Guerreiro",
        description: stringIsNotBoss + "Está presente no segundo estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>90.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>90.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>92.19%</span>",
            health: stringEstHP + "<span class='yellow'>46.24M</span>"
        },
        extra: "- O Dragão Guerreiro possui uma defesa extremamente alta se não for atingido pela catapulta (você causa apenas 10% do seu dano usual). Ao ser atingido, sua defesa será reduzida durante 10 segundos (extendível com congelamento/frame freeze).<br><br>"+
               "- Enquanto estiver enfraquecido, sua defesa ficará oscilando da seguinte forma:<br>"+
               "<span class='tab'>- 3 segundos enfraquecido (ele receberá 10x o dano usual)</span></span>.<br>"+
               "<span class='tab'>- 1 segundo super enfraquecido (ele receberá 20x o dano usual)</span></span>.<br><br>"+
               "- Para maximizar o dano é necessário utilizar um pet que congele durante bastante tempo enquanto o Dragão está super enfraquecido. Dessa forma é possível aumentar a duração da defesa super reduzida dele.",
        path: 'images/monsters/dragon cloister.png',
        IsBoss: false
    },

    "56": {
        name: "Dragão Guerreiro (enfraquecido)",
        description: stringIsNotBoss + "Está presente no segundo estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>46.24M</span>"
        },
        extra: "- O Dragão Guerreiro possui uma defesa extremamente alta se não for atingido pela catapulta (você causa apenas 10% do seu dano usual). Ao ser atingido, sua defesa será reduzida durante 10 segundos (extendível com congelamento/frame freeze).<br><br>"+
               "- Enquanto estiver enfraquecido, sua defesa ficará oscilando da seguinte forma:<br>"+
               "<span class='tab'>- 3 segundos enfraquecido (ele receberá 10x o dano usual)</span></span>.<br>"+
               "<span class='tab'>- 1 segundo super enfraquecido (ele receberá 20x o dano usual)</span></span>.<br><br>"+
               "- Para maximizar o dano é necessário utilizar um pet que congele durante bastante tempo enquanto o Dragão está super enfraquecido. Dessa forma é possível aumentar a duração da defesa super reduzida dele.",
        path: 'images/monsters/dragon cloister.png',
        IsBoss: false
    },

    "57": {
        name: "Dragão Guerreiro (super enfraquecido)",
        description: stringIsNotBoss + "Está presente no segundo estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>46.24M</span>"
        },
        extra: "- O Dragão Guerreiro possui uma defesa extremamente alta se não for atingido pela catapulta (você causa apenas 10% do seu dano usual). Ao ser atingido, sua defesa será reduzida durante 10 segundos (extendível com congelamento/frame freeze).<br><br>"+
               "- Enquanto estiver enfraquecido, sua defesa ficará oscilando da seguinte forma:<br>"+
               "<span class='tab'>- 3 segundos enfraquecido (ele receberá 10x o dano usual)</span></span>.<br>"+
               "<span class='tab'>- 1 segundo super enfraquecido (ele receberá 20x o dano usual)</span></span>.<br><br>"+
               "- Para maximizar o dano é necessário utilizar um pet que congele durante bastante tempo enquanto o Dragão está super enfraquecido. Dessa forma é possível aumentar a duração da defesa super reduzida dele.",
        path: 'images/monsters/dragon cloister.png',
        IsBoss: false
    },
    
    "58": {
        name: "Encantrix",
        description: stringIsNotBoss + "Está presente no terceiro estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.93%</span>",
            health: stringEstHP + "<span class='yellow'>23.82M</span>"
        },
        extra: "- A cada ~27 segundos a Encantrix irá invocar uma nova 'Essência da Morte' (limite de 3).<br>"+
               "- Ao chegar em 50% de seu HP, a Encantrix irá utilizar a 'Aniquilação' (Warning) e passará a acumular energia para utilizar a 'Destruição Final'.<br>"+
               "- Durante a execução do Warning a Encantrix sempre ficará olhando para a direita, o que permite uma abertura para ataque pelas costas com muita facilidade.<br>"+
               "- Ao atingir o limite máximo de energia, a Encantrix irá teleportar para o lado oposto de onde ela está no momento (canto direito, caso ela esteja entre o centro e o canto esquerdo do mapa e vice-versa)",
        path: 'images/monsters/encantrix cloister.png',
        IsBoss: false
    },

    "59": {
        name: "Duel Pon Zec, o Vingador",
        description: stringIsBoss + "Está presente no último estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>46.25M (1850 barras)</span>"
        },
        extra: "- Após ~45 segundos, Duel executará a mecânica de 'casting' até quatro vezes seguidas. Você terá 10 segundos para interromper cada casting.<br>"+
               "- Será necessário causar 3.7M de dano para interromper os três primeiros castings e 2.9M para interromper o último.<br>"+
               "- Se Duel não for interrompido ele realizará um ataque poderoso e voltará ao padrão usual de ataques.<br>"+
               "- Ao interrompê-lo quatro vezes seguidas, Duel ficará enfraquecido e receberá 20% de dano a mais durante 8 segundos.",
        path: 'images/monsters/duel4.png',
        IsBoss: true
    },

    "60": {
        name: "Duel Pon Zec, o Vingador (enfraquecido)",
        description: stringIsBoss + "Está presente no último estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>68.75%</span>",
            health: stringEstHP + "<span class='yellow'>46.25M (1850 barras)</span>"
        },
        extra: "- Após ~45 segundos, Duel executará a mecânica de 'casting' até quatro vezes seguidas. Você terá 10 segundos para interromper cada casting.<br>"+
               "- Será necessário causar 3.7M de dano para interromper os três primeiros castings e 2.9M para interromper o último.<br>"+
               "- Se Duel não for interrompido ele realizará um ataque poderoso e voltará ao padrão usual de ataques.<br>"+
               "- Ao interrompê-lo quatro vezes seguidas, Duel ficará enfraquecido e receberá 20% de dano a mais durante 8 segundos.",
        path: 'images/monsters/duel4.png',
        IsBoss: true
    },

    "61": {
        name: "[Abismo] Monstro Aleatório",
        description: stringIsNotBoss + "Esses são os monstros comuns encontrados no Caminho Abissal. Eles podem possuir alguns buffs que aumentam suas defesas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: ""
        },
        extra: "- Os efeitos aleatórios do estágio só serão aplicados depois de ~7 segundos do início do estágio, portanto é necessário que o grupo consiga causar o maior dano possível em todos os monstros durante esse período, para evitar que os efeitos de redução de dano apareçam nos inimigos.<br>"+
               "- <b>Aumento de defesa geral</b>: o inimigo ficará com uma aura <span class='blue'>azul</span>. Qualquer fonte de dano será reduzida drasticamente (você causará apenas <b>33%</b> do seu dano original).<img src='images/monsters/blue_aura.png' class='mini-icon' oncontextmenu='return false';>"+
               "- <b>Alternância de defesas</b>: o inimigo ficará com uma aura roxa/vermelha.<br>"+
               "※ Quando a aura <span class='purple'>roxa</span> estiver ativa, qualquer skill terá seu dano reduzido drasticamente (você causará apenas <b>10%</b> do dano original).<img src='images/monsters/purple_aura.png' class='mini-icon' oncontextmenu='return false';>"+
               "※ Quando a aura <span class='red'>vermelha</span> estiver ativa, qualquer ataque de comando básico/pet terão seu dano reduzidos drasticamente (você causará apenas <b>10%</b> do dano original).<img src='images/monsters/red_aura.png' class='mini-icon' oncontextmenu='return false';>",
        path: 'images/monsters/general monster.png',
        IsBoss: false
    },

    "62": {
        name: "[Abismo] Chefe Aleatório",
        description: stringIsBoss + "Está presente no Caminho Abissal. Um chefe aleatório aparecerá nos estágios 3 e 9.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Estágio 3: <span class='yellow'>52.82M (2165 barras)</span></span>.<br>"+
                        "<span class='tab'>- Estágio 9: <span class='yellow'>72.50M (2900 barras)</span></span>.<br>"
        },
        extra: "-",
        path: 'images/monsters/quoronnos.png',
        IsBoss: true
    },

    "70": {
        name: "[Abismo] Ceifador",
        description: stringIsNotBoss + "Está presente nos estágios 5 e 11 do Caminho Abissal.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Estágio 5: <span class='yellow'>14.68M</span></span>.<br>"+
                        "<span class='tab'>- Estágio 11: <span class='yellow'>21.12M</span></span>."
        },
        extra: "- O Ceifador possui apenas dois ataques, porém os dois ataques ignoram qualquer tipo de Hiper Armadura. Só é possível evitar os ataques se o jogador estiver em i-frame (durante a esquiva ou durante uma skill).<br>"+
               "- No começo da batalha, o Ceifador irá invocar uma cópia de si mesmo em direção a cada jogador na sala. Assim que uma cópia entrar em contato com um personagem, ele causará dano na região onde o personagem está. Se algum jogador estiver no caminho, receberá dano e morrerá imediatamente."+
               "<video src='videos/reaper_atk1.mp4' autoplay loop muted playsinline class='skill-video'></video>"+
               "- Após todas as cópias atacarem, o Ceifador irá usar um corte horizontal na plataforma em que fica parado. Se algum jogador estiver no caminho, receberá dano e morrerá imediatamente."+
               "<video src='videos/reaper_atk2.mp4' autoplay loop muted playsinline class='skill-video'></video>"+
               "- O Ceifador irá alternar entre esses dois ataques até que seja derrotado ou que todos os jogadores estejam mortos.",
        path: 'images/monsters/reaper.png',
        IsBoss: false
    },

    "71": {
        name: "Dominador Abissal",
        description: stringIsBoss + "Está presente nos estágios (0-3), 6 e 12 do Caminho Abissal.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Estágio (0-3): <span class='yellow'>707k (29 barras)</span></span>.<br>"+
                        "<span class='tab'>- Estágio 6: <span class='yellow'>69.22M (2387 barras)</span></span>.<br>"+
                        "<span class='tab'>- Estágio 12: <span class='yellow'>85.93M (3523 barras)</span></span>."
        },
        extra: "- Aleatoriamente o Dominador Abissal colocará uma marca em um algum jogador. Se o jogador não estiver em i-frame (durante a esquiva ou durante uma skill), o jogador ficará aprisionado. Após alguns segundos, um dos lados da prisão será liberado e o jogador deverá escapar da prisão rapidamente. "+
               "Caso ele falhe, o jogador morrerá, pois a prisão ignora qualquer tipo de Hiper Armadura.<br>"+
               "<video src='videos/dominator_atk.mp4' autoplay loop muted playsinline class='skill-video'></video><br>"+
               "- Há algumas formas de continuar vivo, mesmo se você receber o dano da prisão:<br>"+
               "<span class='tab'>※ Se o jogador tiver muitos buffs de defesa (como o buff da Esfera das Trevas do Dio) e um HP muito alto, pode ser que você fique vivo, dependendo da quantidade de hits que recebeu.<br></span>"+
               "<span class='tab'>※ Se for curado em uma janela de frames muito específica (após o último hit, mas antes do personagem morrer no ar).<br></span>"+
               "<span class='tab'>※ Caso o personagem tenha alguma forma de bloquear o último hit (como o block da Lime e do Ronan).<br></span>"+
               "- Ao atingir a marca de ~40 segundos o Dominador Abissal começará a executar a mecânica de 'casting'. Serão 2 castings nos estágios (0-3) e 6, e 3 castings no estágio 12. Você terá 10 segundos para interromper cada casting.<br><br>"+
               "- Se o Dominador Abissal não for interrompido ele realizará um ataque poderoso e voltará ao padrão usual de ataques.<br>"+
               "- Ao interromper todos os castings, o Dominador Abissal ficará enfraquecido e receberá 200% de dano a mais durante 8 segundos.",
        path: 'images/monsters/dominator.png',
        IsBoss: true
    },

    "72": {
        name: "Dominador Abissal (enfraquecido)",
        description: stringIsBoss + "Está presente nos estágios (0-3), 6 e 12 do Caminho Abissal.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Estágio (0-3): <span class='yellow'>707k (29 barras)</span></span>.<br>"+
                        "<span class='tab'>- Estágio 6: <span class='yellow'>69.22M (2387 barras)</span></span>.<br>"+
                        "<span class='tab'>- Estágio 12: <span class='yellow'>85.93M (3523 barras)</span></span>."
        },
        extra: "- Aleatoriamente o Dominador Abissal colocará uma marca em um algum jogador. Se o jogador não estiver em i-frame (durante a esquiva ou durante uma skill), o jogador ficará aprisionado. Após alguns segundos, um dos lados da prisão será liberado e o jogador deverá escapar da prisão rapidamente. "+
               "Caso ele falhe, o jogador morrerá, pois a prisão ignora qualquer tipo de Hiper Armadura.<br>"+
               "<video src='videos/dominator_atk.mp4' autoplay loop muted playsinline class='skill-video'></video><br>"+
               "- Há algumas formas de continuar vivo, mesmo se você receber o dano da prisão:<br>"+
               "<span class='tab'>※ Se o jogador tiver muitos buffs de defesa (como o buff da Esfera das Trevas do Dio) e um HP muito alto, pode ser que você fique vivo, dependendo da quantidade de hits que recebeu.<br></span>"+
               "<span class='tab'>※ Se for curado em uma janela de frames muito específica (após o último hit, mas antes do personagem morrer no ar).<br></span>"+
               "<span class='tab'>※ Caso o personagem tenha alguma forma de bloquear o último hit (como o block da Lime e do Ronan).<br></span>"+
               "- Ao atingir a marca de ~40 segundos o Dominador Abissal começará a executar a mecânica de 'casting'. Serão 2 castings nos estágios (0-3) e 6, e 3 castings no estágio 12. Você terá 10 segundos para interromper cada casting.<br><br>"+
               "- Se o Dominador Abissal não for interrompido ele realizará um ataque poderoso e voltará ao padrão usual de ataques.<br>"+
               "- Ao interromper todos os castings, o Dominador Abissal ficará enfraquecido e receberá 200% de dano a mais durante 8 segundos.",
        path: 'images/monsters/dominator.png',
        IsBoss: true
    },

    "73": {
        name: "Trevas Imensas",
        description: stringIsNotBoss + "Está presente na Capela da Eternidade.",
        status:{
            defense1: stringDef1 + "<br><span class='tab'>-Escudo: <span class='yellow'>95.00%</span> / Back: <span class='yellow'>0.00%</span></span>",
            defense2: stringDef2 + "<br><span class='tab'>-Escudo: <span class='yellow'>95.00%</span> / Back: <span class='yellow'>0.00%</span></span>",
            defense3: stringDef3 + "<br><span class='tab'>-Escudo: <span class='yellow'>96.10%</span> / Back: <span class='yellow'>21.88%</span></span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>4.41M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>21.89M</span></span>.<br>"+stringScaleHP
        },
        extra: "- O escudo desse inimigo tem uma defesa extremamente alta. Quando recebe dano de ataque pelas costas, ele se comporta como um inimigo comum (defesa baixa) e ainda recebe 33% de dano a mais.",
        path: 'images/monsters/solene/chapel/gigantic darkness.png',
        IsBoss: false
    },

    "74": {
        name: "Trevas Desconhecidas",
        description: stringIsNotBoss + "Está presente na Capela da Eternidade.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>15.74M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/chapel/unknown darkness.png',
        IsBoss: false
    },

    "75": {
        name: "Trevas Encarnadas",
        description: stringIsBoss + "Está presente na Capela da Eternidade.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>6.95M (278 barras)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>52.00M (2080 barras)</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/chapel/embodied darkness.png',
        IsBoss: true
    },

    "76": {
        name: "Comandante Sentinela",
        description: stringIsNotBoss + "Está presente no Salão da Harmonia.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_commander.png',
        IsBoss: false
    },

    "77": {
        name: "Comandante Sentinela (enfraquecido)",
        description: stringIsNotBoss + "Está presente no Salão da Harmonia.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_commander.png',
        IsBoss: false
    },

    "78": {
        name: "Amálgama Sentinela",
        description: stringIsNotBoss + "Está presente no Salão da Harmonia.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_amalgam.png',
        IsBoss: false
    },

    "79": {
        name: "Amálgama Sentinela (Enfraquecido)",
        description: stringIsNotBoss + "Está presente no Salão da Harmonia.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>3.15M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>18.90M</span></span>.<br>"+stringScaleHP
        },
        extra: "-",
        path: 'images/monsters/solene/hall/sentinel_amalgam.png',
        IsBoss: false
    },
    
    "80": {
        name: "General Supremo Sentinela",
        description: stringIsBoss + "Está presente no Salão da Harmonia.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>6.95M (278 barras)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>52.00M (2080 barras)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - O Sentinela possui duas mecânicas de Danger:<br>
                <br> <span class='tab'>※ O Sentinela irá voar e colocar diversas marcas de laser no chão. Em seguida irá aterrissar violentamente sobre algum jogador.</span><br>
                <br> <span class='tab'>※ O Sentinela colocará um <i>grid</i> com algumas regiões seguras. Após 4 segundos ele começará a escanear por jogadores dentro do grid. Caso algum jogador esteja fora da zona segura, o Sentinela irá causar um ataque poderoso no mapa.</span><br>
                - Se o Sentinela não detectar nenhum jogador, ele ficará enfraquecido, perderá todas suas defesas e receberá 33% mais dano durante 5 segundos.         
               `,
        path: 'images/monsters/solene/hall/sentinel_general.png',
        IsBoss: true
    },

    "81": {
        name: "General Supremo Sentinela (Enfraquecido)",
        description: stringIsBoss + "Está presente no Salão da Harmonia.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>0.00%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>6.95M (278 barras)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>52.00M (2080 barras)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - O Sentinela possui duas mecânicas de Danger:<br>
                <br> <span class='tab'>※ O Sentinela irá voar e colocar diversas marcas de laser no chão. Em seguida irá aterrissar violentamente sobre algum jogador.</span><br>
                <br> <span class='tab'>※ O Sentinela colocará um <i>grid</i> com algumas regiões seguras. Após 4 segundos ele começará a escanear por jogadores dentro do grid. Caso algum jogador esteja fora da zona segura, o Sentinela irá causar um ataque poderoso no mapa.</span><br>
                - Se o Sentinela não detectar nenhum jogador, ele ficará enfraquecido, perderá todas suas defesas e receberá 33% mais dano durante 5 segundos.
               `,
        path: 'images/monsters/solene/hall/sentinel_general.png',
        IsBoss: true
    },

    "82": {
        name: "Guardião do Pântano",
        description: stringIsNotBoss + "Está presente no Santuário das Bestas Divinas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>5.04M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>25.13M</span></span>.<br>"+stringScaleHP
        },
        extra: `
                -
               `,
        path: 'images/monsters/solene/sanctuary/swamp_guardian.png',
        IsBoss: false
    },

    "83": {
        name: "Galinha de Fogo",
        description: stringIsNotBoss + "Está presente no Santuário das Bestas Divinas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>2.20M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>12.62M</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - A Galinha de Fogo apenas corre aleatoriamente pelo mapa.
                - Aleatoriamente a Galinha de Fogo entrará em estado de fúria e atacará com um grande dano.<br>
                - Enquanto estiver em estado de fúria, a Galinha de Fogo perderá todas suas defesas e receberá 300% de dano a mais.
               `,
        path: 'images/monsters/solene/sanctuary/chicken_of_fire.png',
        IsBoss: false
    },

    "84": {
        name: "Galinha de Fogo (Enfurecida)",
        description: stringIsNotBoss + "Está presente no Santuário das Bestas Divinas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>2.20M</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>12.62M</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - A Galinha de Fogo apenas corre aleatoriamente pelo mapa.
                - Aleatoriamente a Galinha de Fogo entrará em estado de fúria e atacará com um grande dano.<br>
                - Enquanto estiver em estado de fúria, a Galinha de Fogo perderá todas suas defesas e receberá 300% de dano a mais.
               `,
        path: 'images/monsters/solene/sanctuary/chicken_of_fire.png',
        IsBoss: false
    },

    "85": {
        name: "Surtrark das Chamas",
        description: stringIsBoss + "Está presente no Santuário das Bestas Divinas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>4.75M (190 barras)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>35.45M (1418 barras)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - Esse chefe possui duas mecânicas de Danger baseadas no HP:
                <br>
                <b>※ Acima de 60% de HP</b>
                <br>
                <span class='tab'>
                Após voar para trás e espalhar penas de fogo pelo mapa / cuspir bolas de fogo, o Surtrark poderá colocar uma marca no jogador durante 1 segundo. Após 1 segundo, se o jogador não estiver em estado de i-frame (durante a esquiva ou durante uma skill), o Surtrark irá transformá-lo em galinha.
                <br></span>
                <span class='tab'>
                Em seguida, o Surtrak começará a acumular energia no meio do mapa (indicado por uma barra acima do chefe) e lançará uma onda de energia pelo mapa. Após esse ataque, o Surtrak ficará enfraquecido, perderá todas suas defesas e receberá 100% de dano a mais.
                </span>

                <br>

                <b>※ Abaixo de 60% de HP</b>
                <br>
                <span class='tab'>
                O Surtrark se teleportará para o meio do mapa e fará bolas de fogo cairem do céu. Ele recuperará HP para cada hit que as bolas de fogo causarem nos jogadores. Após finalizar esse ataque, o Surtrak lançará uma onda de energia pelo mapa.
                </span>
               `,
        path: 'images/monsters/solene/sanctuary/surtrark_of_flames.png',
        IsBoss: true
    },

    "86": {
        name: "Surtrark das Chamas (Enfraquecido)",
        description: stringIsBoss + "Está presente no Santuário das Bestas Divinas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<br>"+
                        "<span class='tab'>- Normal: <span class='yellow'>4.75M (190 barras)</span></span>.<br>"+
                        "<span class='tab'>- Master: <span class='yellow'>35.45M (1418 barras)</span></span>.<br>"+stringScaleHP
        },
        extra: `
                - Esse chefe possui duas mecânicas de Danger baseadas no HP:
                <br>
                <b>※ Acima de 60% de HP</b>
                <br>
                <span class='tab'>
                Após voar para trás e espalhar penas de fogo pelo mapa / cuspir bolas de fogo, o Surtrark poderá colocar uma marca no jogador durante 1 segundo. Após 1 segundo, se o jogador não estiver em estado de i-frame (durante a esquiva ou durante uma skill), o Surtrark irá transformá-lo em galinha.
                <br></span>
                <span class='tab'>
                Em seguida, o Surtrak começará a acumular energia no meio do mapa (indicado por uma barra acima do chefe) e lançará uma onda de energia pelo mapa. Após esse ataque, o Surtrak ficará enfraquecido, perderá todas suas defesas e receberá 100% de dano a mais.
                </span>

                <br>

                <b>※ Abaixo de 60% de HP</b>
                <br>
                <span class='tab'>
                O Surtrark se teleportará para o meio do mapa e fará bolas de fogo cairem do céu. Ele recuperará HP para cada hit que as bolas de fogo causarem nos jogadores. Após finalizar esse ataque, o Surtrak lançará uma onda de energia pelo mapa.
                </span>
               `,
        path: 'images/monsters/solene/sanctuary/surtrark_of_flames.png',
        IsBoss: true
    },

};

window.categoryMap = {
    "Padrão": ["0"],
    "Caminho Abissal (AP) - Conquistador": ["61", "62", "70", "71", "72"],
    "Solene - Capela da Eternidade": ["73", "74", "75"],
    "Solene - Salão da Harmonia": ["76", "77", "78", "79", "80", "81"],
    "Solene - Santuário das Bestas Divinas": ["82", "83", "84", "85", "86"],
    "Vazio 1: Invasão": ["18"],
    "Vazio 2: Contaminação": ["19", "20", "21"],
    "Vazio 3: Pesadelo": ["44", "45", "46", "47", "48", "49", "50", "51", "52"],
    "Claustro Infinito 3 (IC3)": ["22", "23", "24", "25", "26", "27", "28", "29"],
    "Claustro Infinito 4 (IC4)": ["53", "54", "55", "56", "57", "58", "59", "60"],
    "Torre da Extinção (TOD)": ["1", "2", "3", "4", "5", "6", "17", "7", "16", "15", "8", "34", "9", "10"],
    "Covil de Berkas": ["11", "12"],
    "Terra do Julgamento": ["13", "14"],
    "Torre das Ilusões (WL)": ["30", "31", "32", "33"]    
};

window.buffsData = [
    // general buffs
    { 
        id: "gc_club", 
        name: "Clube GC", 
        category: "general",
        icon: "images/icons/general/gc_club.png", 
        stats: {buff: 10} 
    },
    { 
        id: "pgc", 
        name: "Clube GC Premium", 
        category: "general",
        icon: "images/icons/general/pgc.png", 
        stats: {buff: 10} 
    },
    { 
        id: "second_gear", 
        name: "Anel da Segunda Marcha",
        category: "general",
        icon: "images/icons/general/second_gear.png", 
        stats: {buff: 15}  
    },
    { 
        id: "persephone", 
        name: "Brinco das Chamas", 
        category: "general",
        icon: "images/icons/general/persephone.png", 
        stats: {buff: 50}  
    },
    { 
        id: "guild", 
        name: "Poção de Ataque da guilda", 
        category: "general",
        icon: "images/icons/general/guild.png", 
        stats: {buff: 15}  
    },
    { 
        id: "lisnar", 
        name: "Bênção de Lisnar", 
        category: "general",
        icon: "images/icons/general/lisnar.png", 
        stats: {buff: 20}  
    },
    { 
        id: "yore_attack", 
        name: "Poção de Ataque dos Demônios Ancestrais", 
        category: "general",
        icon: "images/icons/general/yore_attack.png", 
        stats: {buff: 100}  
    },
    { 
        id: "yore_crit", 
        name: "Poção de Crítico dos Demônios Ancestrais", 
        category: "general",
        icon: "images/icons/general/yore_crit.png", 
        stats: {crit: 100}  
    },
    { 
        id: "yore_berserker", 
        name: "Poção Furiosa dos Demônios Ancestrais", 
        category: "general",
        icon: "images/icons/general/yore_berserker.png", 
        stats: {buff: 100, crit: 100} 
    },
    { 
        id: "renak", 
        name: "Título: Renak", 
        category: "general",
        icon: "images/icons/general/renak.png", 
        stats: {buff: 10, crit: 1.5}  
    },
    { 
        id: "searetone", 
        name: "Título: Seareton", 
        category: "general",
        icon: "images/icons/general/searetone.png", 
        stats: {buff: 5, crit: 1.5}  
    },
    { 
        id: "fury", 
        name: "Conjunto de Raiva", 
        category: "general",
        icon: "images/icons/general/fury.png", 
        stats: {buff: 5},
        maxStacks: 2 
    },
    { 
        id: "fight", 
        name: "Conjunto de Combate", 
        category: "general",
        icon: "images/icons/general/fight.png", 
        stats: {buff: 2.5},
        maxStacks: 2
    },
    { 
        id: "hunt", 
        name: "Conjunto de Caçada", 
        category: "general",
        icon: "images/icons/general/hunt.png", 
        stats: {buff: 10}
    },
    { 
        id: "rage", 
        name: "Conjunto de Fúria", 
        category: "general",
        icon: "images/icons/general/rage.png", 
        stats: {buff: 10}
    },
    { 
        id: "punish", 
        name: "Conjunto de Punição", 
        category: "general",
        icon: "images/icons/general/punish.png", 
        stats: {buff: 10}
    },
    { 
        id: "limit", 
        name: "Conjunto de Limite", 
        category: "general",
        icon: "images/icons/general/limit.png", 
        stats: {buff: 15}
    },
    { 
        id: "fatal1", 
        name: "Aumento de Ataque no Fatal (Pedra Épica)", 
        category: "general",
        icon: "images/icons/general/fatal.png", 
        stats: {buff: 20}
    },
    { 
        id: "fatal2", 
        name: "Aumento de Dano Crítico no Fatal (Pedra Épica)", 
        category: "general",
        icon: "images/icons/general/fatal.png", 
        stats: {crit_dmg: 20}
    },
    { 
        id: "awakening", 
        name: "Skill do Despertar", 
        category: "general",
        icon: "images/icons/general/awakening.png", 
        stats: {buff: 15}  
    },
    { 
        id: "taint_buff", 
        name: "Buff do Vazio 2: Contaminação", 
        category: "general",
        icon: "images/icons/general/void_buff.png", 
        stats: {buff: 200}  
    },
    { 
        id: "nightmare_buff", 
        name: "Buff do Vazio 3: Pesadelo", 
        category: "general",
        icon: "images/icons/general/void_buff.png", 
        stats: {buff: 150}  
    },

    // character buffs
    { 
        id: "bravery", 
        name: "Caminho da Espada", 
        category: "character",
        icon: "images/icons/character/bravery.png", 
        stats: {buff: 10}  
    },
    { 
        id: "invisibility_lass", 
        name: "Invisibilidade", 
        category: "character",
        icon: "images/icons/character/invisibility.png", 
        stats: {buff: 50}  
    },
    { 
        id: "nature_ryan", 
        name: "Chamado da Natureza", 
        category: "character",
        icon: "images/icons/character/nature.png", 
        stats: {buff: 7}  
    },
    { 
        id: "wolf_own", 
        name: "Transformação do Lobo (auto buff)", 
        category: "character",
        icon: "images/icons/character/wolf.png", 
        stats: {buff: 20}  
    },
    { 
        id: "wolf_party", 
        name: "Transformação do Lobo (buff para o grupo)", 
        category: "character",
        icon: "images/icons/character/wolf.png", 
        stats: {buff: 7}  
    },
    { 
        id: "magnus_own", 
        name: "Transformação do Magnus (auto buff)", 
        category: "character",
        icon: "images/icons/character/magnus.png", 
        stats: {crit: 5}  
    },
    { 
        id: "magnus_party", 
        name: "Transformação do Magnus (buff para o grupo)", 
        category: "character",
        icon: "images/icons/character/magnus.png", 
        stats: {crit: 1.5}  
    },
    { 
        id: "dark_myst", 
        name: "Névoa Sombria",
        category: "character",
        icon: "images/icons/character/dark_myst.png", 
        stats: {buff: 5}  
    },
    { 
        id: "holy_bless", 
        name: "Bênção Divina",
        category: "character",
        icon: "images/icons/character/holy_bless.png", 
        stats: {buff: 5},
        maxStacks: 5
    },
    { 
        id: "tempest_blade", 
        name: "Lâmina Ilusória",
        category: "character",
        icon: "images/icons/character/tempest_blade.png", 
        stats: {buff: 10}
    },
    { 
        id: "erudon", 
        name: "Arma dos Erudon",
        category: "character",
        icon: "images/icons/character/erudon.png", 
        stats: {buff: 10}  
    },
    { 
        id: "fever", 
        name: "Hora da Dança",
        category: "character",
        icon: "images/icons/character/fever.png", 
        stats: {buff: 15},
    },
    { 
        id: "fan_service1", 
        name: "Melodia do Amor Nv1",
        category: "character",
        icon: "images/icons/character/fan_service1.png", 
        stats: {buff: 15},
    },
    { 
        id: "fan_service2", 
        name: "Melodia do Amor Nv2",
        category: "character",
        icon: "images/icons/character/fan_service2.png", 
        stats: {buff: 30},
    },
    { 
        id: "yin1", 
        name: "Yin Tipo 1",
        category: "character",
        icon: "images/icons/character/yin.png", 
        stats: {buff: 100},
    },
    { 
        id: "yin2", 
        name: "Yin Tipo 2",
        category: "character",
        icon: "images/icons/character/yin.png", 
        stats: {buff: 10},
    },
    { 
        id: "rage_sieghart1", 
        name: "Fúria 1ª ~ 3ª classe", 
        category: "character",
        icon: "images/icons/character/rage_sieghart1.png", 
        stats: {buff: 10}  
    },
    { 
        id: "rage_sieghart2", 
        name: "Fúria 4ª classe",
        category: "character",
        icon: "images/icons/character/rage_sieghart1.png", 
        stats: {buff: 15}  
    },
    { 
        id: "orb", 
        name: "Orbe do Poder",
        category: "character",
        icon: "images/icons/character/orb.png", 
        stats: [
            { buff: 10 },
            { buff: 15 },
            { buff: 20 }
        ],
        maxStacks: 3
    },
    { 
        id: "SS", 
        name: "Postura Inicial Aprimorada <span class='command'>C+↑</span>",
        category: "character",
        icon: "images/icons/character/SS.png", 
        stats: {buff: 5}  
    },
    { 
        id: "offensive", 
        name: "Postura Ofensiva <span class='command'>C+→</span>",
        category: "character",
        icon: "images/icons/character/offensive.png", 
        stats: {crit: 5}  
    },
    { 
        id: "grandark", 
        name: "Dominação Grandark",
        category: "character",
        icon: "images/icons/character/grandark.png", 
        stats: {buff: 10}  
    },
    { 
        id: "bastion", 
        name: "Bastião",
        category: "character",
        icon: "images/icons/character/bastion.png", 
        stats: {buff: 10}  
    },
    { 
        id: "haunt", 
        name: "Haunt",
        category: "character",
        icon: "images/icons/character/haunt.png", 
        stats: {crit: 3}  
    },
    { 
        id: "rage_mode", 
        name: "Fúria",
        category: "character",
        icon: "images/icons/character/rage_mode.png", 
        stats: {buff: 10}  
    },
        { 
        id: "charging", 
        name: "Aumentar Poder",
        category: "character",
        icon: "images/icons/character/charging.png", 
        stats: [
            { buff: 3 },
            { buff: 6 },
            { buff: 10 }
        ],
        maxStacks: 3
    },
    { 
        id: "transformation", 
        name: "Aprimoramento da Transformação",
        category: "character",
        icon: "images/icons/character/transformation.png", 
        stats: {buff: 5}  
    },
    { 
        id: "enhancement", 
        name: "Aumentar Ataque Aprimorado",
        category: "character",
        icon: "images/icons/character/enhancement.png", 
        stats: {crit: 5}  
    },
    { 
        id: "increased_attack", 
        name: "Aumentar Ataque",
        category: "character",
        icon: "images/icons/character/increased_attack.png", 
        stats: {buff: 10}  
    },
    { 
        id: "bless2", 
        name: "Bênção Nv2",
        category: "character",
        icon: "images/icons/character/bless2.png", 
        stats: [
            { buff: 1 },
            { buff: 2 },
            { buff: 3 }
        ],
        maxStacks: 3
    },
    { 
        id: "aura_attack1", 
        name: "Aura: Ataque",
        category: "character",
        icon: "images/icons/character/aura_attack1.png", 
        stats: {buff: 5}  
    },
    { 
        id: "aura_attack2", 
        name: "Aura: Ataque (Aumentar Ataque)",
        category: "character",
        icon: "images/icons/character/aura_attack2.png", 
        stats: {buff: 7}  
    },
    { 
        id: "divine_punishment", 
        name: "Punição Divina",
        category: "character",
        icon: "images/icons/character/divine_punishment.png", 
        stats: {buff: 15}  
    },
    { 
        id: "berserker1", 
        name: "Berserk",
        category: "character",
        icon: "images/icons/character/berserker1.png", 
        stats: {buff: 15, crit: 9}  
    },
    { 
        id: "berserker2", 
        name: "Berserk 2",
        category: "character",
        icon: "images/icons/character/berserker2.png", 
        stats: {buff: 20, crit: 9}  
    },
    { 
        id: "byet", 
        name: "Byet",
        category: "character",
        icon: "images/icons/character/byet.png", 
        stats: {buff: 3}  
    },
    { 
        id: "hy", 
        name: "Hy",
        category: "character",
        icon: "images/icons/character/hy.png", 
        stats: {buff: 3}  
    },
    { 
        id: "het", 
        name: "Het",
        category: "character",
        icon: "images/icons/character/het.png", 
        stats: {buff: 3}  
    },
    { 
        id: "domination", 
        name: "Domínio",
        category: "character",
        icon: "images/icons/character/domination.png", 
        stats: {buff: 5}  
    },
    { 
        id: "taint", 
        name: "Contaminação",
        category: "character",
        icon: "images/icons/character/taint.png", 
        stats: {buff: 15}  
    },
    { 
        id: "overpower", 
        name: "Subjugar",
        category: "character",
        icon: "images/icons/character/overpower.png", 
        stats: {buff: 5}  
    },
    { 
        id: "standby", 
        name: "Espera",
        category: "character",
        icon: "images/icons/character/standby.png", 
        stats: {buff: 5}  
    },
    { 
        id: "module", 
        name: "Módulo de Ativação de Habilidade Nv2",
        category: "character",
        icon: "images/icons/character/module.png", 
        stats: {buff: 5}  
    },
    { 
        id: "overheat1", 
        name: "Superaquecimento",
        category: "character",
        icon: "images/icons/character/overheat1.png", 
        stats: {buff: 5},
        stats: [
            { buff: 1 },
            { buff: 2 },
            { buff: 3 },
            { buff: 4 },
            { buff: 5 },
            { buff: 6 },
            { buff: 7 },
            { buff: 8 },
            { buff: 9 },
            { buff: 10 },
            { buff: 11 },
            { buff: 12 },
            { buff: 13 },
            { buff: 14 },
            { buff: 15 },
            { buff: 16 },
            { buff: 17 },
            { buff: 18 },
            { buff: 19 },
            { buff: 20 },
        ],
        maxStacks: 20 
    },
    { 
        id: "overheat2", 
        name: "Explosão de Superaquecimento",
        category: "character",
        icon: "images/icons/character/overheat2.png", 
        stats: {buff: 30}  
    },
    { 
        id: "wrathful_demon", 
        name: "Frenesi",
        category: "character",
        icon: "images/icons/character/wrathful_demon.png", 
        stats: {buff: 15}  
    },
    { 
        id: "paint", 
        name: "Tinta Demais!",
        category: "character",
        icon: "images/icons/character/paint.png", 
        stats: {buff: 5}  
    },
    { 
        id: "go_luffy", 
        name: "Vai! Luffy!",
        category: "character",
        icon: "images/icons/character/go_luffy.png", 
        stats: {buff: 5}  
    },

    // pet

    { 
        id: "pet1", 
        name: "Pedra Mágica Vermelha Comum",
        category: "pet",
        icon: "images/icons/pet/pet1.png", 
        stats: {pet_buff: 4}  
    },
    { 
        id: "pet2", 
        name: "Pedra Mágica Vermelha Avançada",
        category: "pet",
        icon: "images/icons/pet/pet2.png", 
        stats: {pet_buff: 8}  
    },
    { 
        id: "pet3", 
        name: "Pedra Mágica Vermelha Superior",
        category: "pet",
        icon: "images/icons/pet/pet3.png", 
        stats: {pet_buff: 10}  
    },
    
    // ignore def debuffs
    { 
        id: "provocation", 
        name: "Provocar",
        category: "defense",
        icon: "images/icons/defense/provocation.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "amplifying", 
        name: "Amplificador de Dano",
        category: "defense",
        icon: "images/icons/defense/amplifying.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "fear", 
        name: "Amedrontar Nv2",
        category: "defense",
        icon: "images/icons/defense/fear.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "block", 
        name: "Block (Defensor)",
        category: "defense",
        icon: "images/icons/defense/block.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "mystic flow", 
        name: "Prisma Brilhante",
        category: "defense",
        icon: "images/icons/defense/mystic_flow.png", 
        stats: {ignore_def: 10}  
    },
    { 
        id: "haunt_curse", 
        name: "Maldição: Vermelha (Rey)",
        category: "defense",
        icon: "images/icons/defense/haunt_curse.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "l_rin", 
        name: "Selo",
        category: "defense",
        icon: "images/icons/defense/l_rin.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "charge", 
        name: "Ataque Carregado",
        category: "defense",
        icon: "images/icons/defense/charge.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "pressure_point", 
        name: "Punho de Agulha",
        category: "defense",
        icon: "images/icons/defense/pressure_point.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "water_puddle", 
        name: "Armadilha de Água",
        category: "defense",
        icon: "images/icons/defense/water_puddle.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "leg_break", 
        name: "Tiro Incapacitante",
        category: "defense",
        icon: "images/icons/defense/leg_break.png", 
        stats: {ignore_def: 7}  
    },
    { 
        id: "absolute_dark", 
        name: "Zona Nula",
        category: "defense",
        icon: "images/icons/defense/absolute_dark.png", 
        stats: {ignore_def: 8}  
    },
    { 
        id: "void_weaken", 
        name: "Vazio: Enfraquecer",
        category: "defense",
        icon: "images/icons/defense/void_weaken.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "chain_blast", 
        name: "Cadeia Explosiva TIPO 2",
        category: "defense",
        icon: "images/icons/defense/chain_blast.png", 
        stats: {ignore_def: 10}  
    },
    { 
        id: "mass_explosion", 
        name: "Explosão em Massa TIPO 2",
        category: "defense",
        icon: "images/icons/defense/mass_explosion.png", 
        stats: {ignore_def: 5}  
    },
    { 
        id: "crimson_blood", 
        name: "1ª Arte do Sangue Escarlate",
        category: "defense",
        icon: "images/icons/defense/crimson_blood.png", 
        stats: [
            { ignore_def: 5},
            { ignore_def: 10},
        ] ,
        maxStacks:2
    },

    // enemy resistances
    { 
        id: "increased_defense", 
        name: "Defesa Aumentada",
        category: "resist",
        icon: "images/icons/resist/increased_defense.png", 
        stats: {resist_all: -20}  
    },
    { 
        id: "damage_reduction", 
        name: "Redução de Dano",
        category: "resist",
        icon: "images/icons/resist/damage_reduction.png", 
        stats: {resist_normal: -30}  
    },
    { 
        id: "special_damage_reduction", 
        name: "Redução de Dano Especial",
        category: "resist",
        icon: "images/icons/resist/special_damage_reduction.png", 
        stats: {resist_special: -30}  
    },
    { 
        id: "cdmg_reduction", 
        name: "Redução de Dano Crítico",
        category: "resist",
        icon: "images/icons/resist/cdmg_reduction.png", 
        stats: {crit_dmg: -150}  
    },
    { 
        id: "blue_aura", 
        name: "Aumento de defesa geral (Abissal)",
        category: "resist",
        icon: "images/monsters/blue_aura.png", 
        stats: {resist_all: -200/3}  
    },
    { 
        id: "purple_aura", 
        name: "Aumento de defesa contra habilidades (Abissal)",
        category: "resist",
        icon: "images/monsters/purple_aura.png", 
        stats: {resist_special: -90}  
    },
    { 
        id: "red_aura", 
        name: "Aumento de defesa contra comandos básicos/pet (Abissal)",
        category: "resist",
        icon: "images/monsters/red_aura.png", 
        stats: {resist_normal: -90}  
    },
    
];