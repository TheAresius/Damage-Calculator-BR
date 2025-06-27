var enemyData = {
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
        name: "Gorgos da Escuridão (1F - ToD)",
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
        name: "Essência Maligna do Gadosen (2F - ToD)",
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
        name: "Alma da Feiticeira Kamiki (3F - ToD)",
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
        name: "Espírito do Samurai Gaikoz (4F - ToD)",
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
        name: "Cazeaje (5F - ToD)",
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
        name: "Gorgos da Escuridão (6F - ToD)",
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
        name: "Gorgos Gigante da Escuridão (6F - ToD)",
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
        name: "Espírito do Samurai Gaikoz (7F - ToD)",
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
        name: "Espírito do Samurai Gaikoz (7F - ToD)",
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
        name: "Alma da Feiticeira Kamiki (8F - ToD)",
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
        name: "Alma da Feiticeira Kamiki (8F - ToD)",
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
        name: "Essência Maligna do Gadosen (9F - ToD)",
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
        name: "Essência Maligna do Gadosen (9F - ToD)",
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
        name: "Cazeaje (10F - ToD)",
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
                                       "O buff adquirido do Executor do Vazio, presente nas fases 2, 3 e 4 é de <span class='yellow'>200%</span>. Adicione esse valor ao \"Outros Buffs\" caso deseje.",
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
               "- É necessário causar 1M de dano para interromper a mecânica.",
        path: 'images/monsters/enforcer.png',
        IsBoss: false
    },

    "21": {
        name: "Observador do Vazio",
        description: stringIsBoss + "Está presente na raid Vazio (Invasão) a partir da 2° fase. <br>"+
                                       "Há um debuff de 20% de contaminação neste calabouço. O debuff já está aplicado automaticamente na calculadora.<br>"+
                                       "O buff adquirido do Executor do Vazio, presente nas fases 2, 3 e 4 é de <span class='yellow'>200%</span>. Adicione esse valor ao \"Outros Buffs\" caso deseje.",
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
               "- É necessário causar 2M de dano para interromper a mecânica na fase 3 e 3M de dano na fase 4.",
        path: 'images/monsters/gazer.png',
        IsBoss: true
    },

    "22": {
        name: "Rofnus (Claustro Infinito)",
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
        name: "Rofnus com recuperação de HP (Claustro Infinito)",
        description: stringIsNotBoss + "Está presente no primeiro estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>8.00M</span>"
        },
        extra: "- Quando estiver abaixo de 66% de HP, Rofnus poderá entrar no estado de fúria e recuperar até 33% de HP total.<br>"+
               "- Rofnus fica mais suscetível a dano quando está recuperando HP. Seu dano final é aumentado em 30% contra ele.",
        path: 'images/monsters/rofnus.png'
    },

    "24": {
        name: "Skeram (Claustro Infinito)",
        description: stringIsNotBoss + "Está presente no segundo estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>23.40%</span>",
            health: stringEstHP + "<span class='yellow'>10.00M</span>"
        },
        extra: "- Skeram absorverá 5% do seu HP total para cada um de suas formigas que forem derrotadas.",
        path: 'images/monsters/skeram.png',
        IsBoss: false
    },

    "25": {
        name: "Bruxa do Caos (Claustro Infinito)",
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
        name: "Bruxa do Caos (proteção Roxa) (Claustro Infinito)",
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
        name: "Bruxa do Caos (proteção vermelha) (Claustro Infinito)",
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
        name: "Duel Pon Zec, o Vingador (Dificuldade 3)",
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
        name: "Duel Pon Zec, o Vingador (enfraquecido) (Dificuldade 3)",
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
               "- Após ~1:30 do início do estágio o Apóstolo irá utilizar a mecânica de 'danger', que invocará diversas esferas em sequência pelo mapa. Durante este período o Apóstolo deixará o mapa e não será possível causar dano a ele.<br>",
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
               "- O Apóstolo poderá utilizar a mecânica de 'danger'. Um vento soprará para a esquerda ou para a direita, indicando o lado para o qual o boss voará enquanto causa uma grande quantidade de dano. Se ele voar para a esquerda ele ficará parado na plataforma de baixo; se voar para a direita ele ficará parado na plataforma de cima.<br><br>"+
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
        name: "Duel Pon Zec, o Vingador (Dificuldade 4)",
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
        name: "Duel Pon Zec, o Vingador (Dificuldade 4) (enfraquecido)",
        description: stringIsBoss + "Está presente no último estágio do Claustro Infinito na dificuldade 4.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<span class='yellow'>46.25M (1850 barras)</span>"
        },
        extra: "- Após ~45 segundos, Duel executará a mecânica de 'casting' até quatro vezes seguidas. Você terá 10 segundos para interromper cada casting.<br>"+
               "- Será necessário causar 3.7M de dano para interromper os três primeiros castings e 2.9M para interromper o último.<br>"+
               "- Se Duel não for interrompido ele realizará um ataque poderoso e voltará ao padrão usual de ataques.<br>"+
               "- Ao interrompê-lo quatro vezes seguidas, Duel ficará enfraquecido e receberá 20% de dano a mais durante 8 segundos.",
        path: 'images/monsters/duel4.png',
        IsBoss: true
    },

};
