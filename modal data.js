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
        path: 'images/monsters/general monster.png'
    },

    "1": {
        name: "Gorgos da Escuridão (1F - ToD)",
        description: stringIsBoss + "Está presente no primeiro estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>943k (37 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png'
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
        path: 'images/monsters/gadosen 1.png'
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
        path: 'images/monsters/kamiki 1.png'
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
        path: 'images/monsters/gaikoz 1.png'
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
        path: 'images/monsters/cazeaje.png'
    },

    "6": {
        name: "Gorgos da Escuridão (6F - ToD)",
        description: stringIsNotBoss + "Está presente no sexto estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.29M</span>" + stringScaleHP
        },
        extra: "- É necessário remover apenas 65% do HP para derrotá-lo.",
        path: 'images/monsters/gorgos 2.png'
    },

    "17": {
        name: "Gorgos Gigante da Escuridão (6F - ToD)",
        description: stringIsBoss + "Está presente no sexto estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.31M (139 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/gorgos 1.png'
    },

    "7": {
        name: "Espírito do Samurai Gaikoz (7F - ToD)",
        description: "Apenas os dois Gaikoz invocados são considerados um chefe. Está presente no sétimo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>1.81M</span>" + stringScaleHP
        },
        extra: "- É necessário remover apenas 50% do HP para derrotá-lo.",
        path: 'images/monsters/gaikoz 2.png'
    },

    "16": {
        name: "Espírito do Samurai Gaikoz (7F - ToD)",
        description: "Apenas os dois Gaikoz invocados são considerados um chefe. Está presente no sétimo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>30.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.97M (167 barras)</span>."
        },
        extra: "-",
        path: 'images/monsters/gaikoz 1.png'
    },

    "15": {
        name: "Alma da Feiticeira Kamiki (8F - ToD)",
        description: "Apenas as duas Kamiki invocadas são consideradas um chefe. Está presente no oitavo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.37M</span>" + stringScaleHP
        },
        extra: "- Kamiki utilizará uma névoa congelante a cada 20 segundos em uma região demarcada no mapa. Essa névoa removerá seu HP rapidamente.",
        path: 'images/monsters/kamiki 2.png'
    },

    "8": {
        name: "Alma da Feiticeira Kamiki (8F - ToD)",
        description: "Apenas as duas Kamiki invocadas são consideradas um chefe. Está presente no oitavo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>3.37M (141 barras)</span>."
        },
        extra: "- Kamiki utilizará uma névoa congelante a cada 20 segundos em uma região demarcada no mapa. Essa névoa removerá seu HP rapidamente.",
        path: 'images/monsters/kamiki 1.png'
    },

    "34": {
        name: "Essência Maligna do Gadosen (9F - ToD)",
        description: "Apenas os dois Gadosen invocados são considerados um chefe. Está presente no nono estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>6.00M</span>" + stringScaleHP
        },
        extra: "- É necessário remover apenas 33% do HP para derrotá-lo.",
        path: 'images/monsters/gadosen 2.png'
    },

    "9": {
        name: "Essência Maligna do Gadosen (9F - ToD)",
        description: "Apenas os dois Gadosen invocados são considerados um chefe. Está presente no nono estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>6.00M (353 barras)</span>."
        },
        extra: "- Gadosen usará sua mecânica de 'absorção de alma' a cada 40 segundos. Se você estiver na área vermelha você morrerá, não importa o quê faça.",
        path: 'images/monsters/gadosen 1.png'
    },

    "10": {
        name: "Cazeaje (10F - ToD)",
        description: stringIsBoss + "Está presente no décimo estágio da Torre da Extinção (ToD).",
        status:{
            defense1: stringDef1 + "<span class='yellow'>60.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>60.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>40.00%</span>",
            health: stringEstHP + "<span class='yellow'>52.77M (2401 barras)</span>."
        },
        extra: "- De tempos em tempos Cazeaje irá se teleportar para o centro do mapa e começará a acumular energia. Um conjunto de marcas aparecerá no chão indicando a sequência do ataque.<br>"+
               "- Se você usar skills enquanto ela concentra energia, você poderá causar delay no ataque e acabar matando os membros do grupo.",
        path: 'images/monsters/cazeaje.png'
    },

    "11": {
        name: "Berkas (corpo)",
        description: stringIsBoss + "Está presente na raid Covil de Berkas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>7.90M (307 barras)</span>" + stringScaleHP
        },
        extra: "- Devido ao seu tamanho, Berkas possui muitas regiões de hitbox e o dano causado a ele é dividido entre corpo e patas. <br>"+
               "- O dano causado nas patas é reduzido em 60%",
        path: 'images/monsters/berkas.png'
    },

    "12": {
        name: "Berkas (patas)",
        description: stringIsBoss + "Está presente na raid Covil de Berkas.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>40.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>40.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>53.12%</span>",
            health: stringEstHP + "<span class='yellow'>7.90M (307 barras)</span>" + stringScaleHP
        },
        extra: "- Devido ao seu tamanho, Berkas possui muitas regiões de hitbox e o dano causado a ele é dividido entre corpo e patas. <br>"+
               "- O dano causado nas patas é reduzido em 60%",
        path: 'images/monsters/berkas.png'
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
        path: 'images/monsters/harkyon.png'
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
        path: 'images/monsters/harkyon.png'
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
        path: 'images/monsters/devourer.png'
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
        path: 'images/monsters/crusher.png'
    },

    "20": {
        name: "Executor do Vazio",
        description: stringIsNotBoss + "Está presente na raid Vazio (Invasão) a partir da 2° fase.<br>"+
                                       "Há um debuff de 20% de contaminação neste calabouço. O debuff já está aplicado automaticamente na calculadora.<br>"+
                                       "O buff adquirido do Executor do Vazio, presente nas fases 2, 3 e 4 é de <span class='yellow'>200%</span>. Some esse valor aos seus buffs, caso deseje.",
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
        path: 'images/monsters/enforcer.png'
    },

    "21": {
        name: "Observador do Vazio",
        description: stringIsNotBoss + "Está presente na raid Vazio (Invasão) a partir da 2° fase.<br>"+
                                       "Há um debuff de 20% de contaminação neste calabouço. O debuff já está aplicado automaticamente na calculadora.<br>"+
                                       "O buff adquirido do Executor do Vazio, presente nas fases 2, 3 e 4 é de <span class='yellow'>200%</span>. Some esse valor aos seus buffs, caso deseje.",
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
        path: 'images/monsters/gazer.png'
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
        extra: "Rofnus fica mais suscetível a dano quando está recuperando HP. Seu dano final é aumentado em 30% contra ele.",
        path: 'images/monsters/rofnus.png'
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
        extra: "Rofnus fica mais suscetível a dano quando está recuperando HP. Seu dano final é aumentado em 30% contra ele.",
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
        extra: "-",
        path: 'images/monsters/skeram.png'
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
               "- Ao invocar a <span class='red'>proteção vermelha</span>, a Bruxa do Caos reduz o dano proveniente de ataques normais e de pet em 66% e recebe 60% de dano a mais proveniente de habilidades.",
        path: 'images/monsters/dekane.png'
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
               "- Ao invocar a <span class='red'>proteção vermelha</span>, a Bruxa do Caos reduz o dano proveniente de ataques normais e de pet em 66% e recebe 60% de dano a mais proveniente de habilidades.",
        path: 'images/monsters/dekane.png'
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
               "- Ao invocar a <span class='red'>proteção vermelha</span>, a Bruxa do Caos reduz o dano proveniente de ataques normais e de pet em 66% e recebe 60% de dano a mais proveniente de habilidades.",
        path: 'images/monsters/dekane.png'
    },

    "28": {
        name: "Duel Pon Zec, o Vingador (Claustro Infinito)",
        description: stringIsBoss + "Está presente no último estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>66.66%</span>",
            defense2: stringDef2 + "<span class='yellow'>66.66%</span>",
            defense3: stringDef3 + "<span class='yellow'>73.96%</span>",
            health: stringEstHP + "<span class='yellow'>16.10M (644 barras)</span>"
        },
        extra: "- Duel executará a mecânica de 'casting' três vezes seguidas, sendo necessário causar 1.7M de dano para interrompê-lo.<br>"+
                "- Ao interrompê-lo três, vezes Duel ficará enfraquecido e receberá 50% de dano mais.",
        path: 'images/monsters/duel.png'
    },

    "29": {
        name: "Duel Pon Zec, o Vingador (enfraquecido) (Claustro Infinito)",
        description: stringIsBoss + "Está presente no último estágio do Claustro Infinito na dificuldade 3.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>50.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>50.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>60.94%</span>",
            health: stringEstHP + "<span class='yellow'>16.00M (640 barras)</span>"
        },
        extra: "- Duel executará a mecânica de 'casting' três vezes seguidas, sendo necessário causar 1.7M de dano para interrompê-lo.<br>"+
                "- Ao interrompê-lo três vezes, Duel ficará enfraquecido e receberá 50% de dano mais.",
        path: 'images/monsters/duel.png'
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
        path: 'images/monsters/periett.png'
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
        path: 'images/monsters/thanatos.png'
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
        path: 'images/monsters/evilis.png'
    },
    "33": {
        name: "Caxias Grandiel",
        description: stringIsBoss + "Está presente no andar 30 da Torre das Ilusões.",
        status:{
            defense1: stringDef1 + "<span class='yellow'>0.00%</span>",
            defense2: stringDef2 + "<span class='yellow'>0.00%</span>",
            defense3: stringDef3 + "<span class='yellow'>21.88%</span>",
            health: stringEstHP + "<span class='yellow'>17.41M</span>"
        },
        extra: "- Quando Grandiel estiver abaixo de 80% de HP ele poderá invocar Drall e Vairne, que atacarão simultaneamente. Será necessário derrotá-los para que Grandiel possa receber dano.<br>"+
               "- Após derrotar Drall e Vairne, e quando estiver abaixo de 50% de HP, Grandiel poderá invocar 5 clones, que atacarão simultaenamente.",
        path: 'images/monsters/grandiel.png'
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
        path: 'images/monsters/guardiao.png'
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
        path: 'images/monsters/guardiao.png'
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
        path: 'images/monsters/gaian.png'
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
        path: 'images/monsters/gaian.png'
    },

};
