// modal window setup
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var showInfoButton = document.getElementById('calc-info');
    var closeButton = document.querySelector('.close-button');
    var modalContent = modal.querySelector('.modal-content')
    var modalText = document.getElementById('modalText');
    var body = document.body;
  
    function showModal() {
        overlay.classList.add('show');
        modal.style.display = 'block';
        body.classList.add('no-scroll');
        setTimeout(function() {
            modalContent.classList.add('show');
        }, 10); // delay to trigger the transition
    }
  
    function hideModal() {
        modalContent.classList.remove('show');
        modalContent.classList.add('hide');
  
        setTimeout(function() {
            modal.style.display = 'none';
            modalContent.classList.remove('hide');
            overlay.classList.remove('show');
            body.classList.remove('no-scroll');
        }, 300);
    }
    showInfoButton.addEventListener('click', function(event) {
    event.preventDefault();
  
    // modal content
    modalText.innerHTML = `<div class="modal-calc-header">
                                 <div class="modal-name">Calculadora de Dano</div>
                               </div>
                               <div class="modal-separator"></div>

                               <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#F2F4F4;'>[Níveis]</span>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Nível do personagem</b></span> você irá inserir o nível do seu personagem. Não é o chase level!</p></span></div>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Nível do monstro</b></span> você irá inserir o nível do monstro. Os monstros que se encontram na
                                        tabela de inimigos são considerados no nível 85 automaticamente.</p></span></div>
                               </div>

                            <div class="title-separator"></div>

                               <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: #FFB347;'>[Status]</span>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'>Aqui você irá inserir os valores de status do seu personagem.</p></span></div>

                            <div class="title-separator"></div>

                               <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#9370DB;'>[Contaminação]</span>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Debuff de Contaminação</b></span> você irá inserir o debuff de contaminação presente na dungeon. Não é necessário
                                        inserir esse valor caso a dungeon não tenha contaminação.</p></span></div>
                               <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Resistência a Contaminação</b></span> você irá inserir seus status de resistência a contaminação. Não é necessário
                                        inserir esse valor caso a dungeon não tenha contaminação.</p></span></div>

                            <div class="title-separator"></div>

                                <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#CE6363;'>[Buffs]</span>
                                    <div><span class='indent'><p class='justified'>Todos os buffs possuem uma check box. Se ela estiver marcada, a calculadora irá considerar aquele valor para fazer os cálculos. Você pode selecionar apenas os buffs que desejar e os que forem apropriados para cada situação.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Dano de todas as habilidades</b></span> você irá inserir a quantidade desse status que está presente na janela de status do seu personagem.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Dano ao atacar / ser atacado</b></span> você irá inserir a quantidade desse status que está presente na janela de status do seu personagem.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Dano causado a chefes</b></span> você irá inserir a quantidade desse status que está presente na janela de status do seu personagem. Lembre-se de que nem todos os inimigos 
                                    são considerados chefes!</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Ataque pelas costas</b></span> você irá inserir a quantidade desse status que está presente na janela de status do seu personagem. Caso não selecione essa checkbox, a calculadora
                                    irá considerar apenas o valor base de ataque pelas costas que o jogo usa (30%).</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Outros buffs</b></span> você irá inserir a soma dos buffs que não são contabilizados na página de status, sejam buffs de club GC, runas, títulos, buffs de personagens, anel da segunda marcha ou os buffs
                                    de habilidades específicas como o dano de habilidades normais, dano de habilidades de despertar e dano de habilidades de 4ª barra.</p></span></div>

                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Debuffs de quebrar defesa</b></span> você irá inserir a soma de todos os debuffs de quebrar
                                            defesa que estão aplicados ao inimigo, como o Provocar da Elesis ou o Amedontrar da Arme. Não é necessário inserir caso os debuffs não estejam ativos.</p></span></div>
                            
                            <div class="title-separator"></div>
                                <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#5DADE2;'>[Dano Base]</span>                                            
                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Em <span class='yellow'><b>Dano base</b></span> você irá inserir o valor do dano base do comando básico, skill ou pet que pretende testar. É
                                            possível encontrar uma tabela com todos os valores de dano base do jogo clicando <a class="one" href="https://docs.google.com/spreadsheets/d/1FGxKHQuwz_Jx-GdYd6647FiAE9UbS6mZgufXor9_DZk/edit#gid=722314000" class="inline-link" target="_blank" rel="noopener noreferrer">aqui</a>.<br>
                                            Também é possível inserir um valor hipotético de dano base como '100', por exemplo, apenas para fins de testes.</p></span></div>

                            <div class="title-separator"></div>
                            
                                <span style='font-size: 14pt; font-weight: 600; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color:#007BFF;'>[Tipo de Dano]</span>                                            
                                    <div><span class='topic'>-</span><span class='indent'><p class='justified'>Aqui você irá escolher o tipo de fonte de dano que irá utilizar.</span></div>
                                        <div><span class='topic'>-</span><span class='indent'><p class='justified'>O <span class='yellow'><b>Dano de comando básico</b></span> se aplica a diversos tipos de ações que são realizadas com as teclas Z, X ou C,
                                        como os combos básicos dos personagens, por exemplo.<br>O status de Ataque Especial não é aplicado a essa fonte de dano.<br>
                                        O comando de ataque no pulo da primeira classe do Ronan, por exemplo, possui um dano base de 5.01.</p></span></div>

                                        <div><span class='topic'>-</span><span class='indent'><p class='justified'>O <span class='yellow'><b>Dano de skill</b></span> se aplica à maioria absoluta das skills e alguns comandos especiais como o encantamento
                                        de fogo do Ronan, certas habilidades ativas (técnicas) e dano de invocações.<br>
                                        A skill Golpe Absoluto Tipo 1 da Kallia, por exemplo, possui um hit único de 324.55 de dano base.</p></span></div>
                                        
                                        <div><span class='topic'>-</span><span class='indent'><p class='justified'>O <span class='yellow'><b>Dano de pet</b></span> se aplica exclusivamente ao dano de todos os pets do jogo. O status de Ataque Especial não é
                                        aplicado a essa fonte de dano.<br>
                                        O Sirioth, por exemplo possui um valor de dano base de 11.33 por hit no início do seu ataque (30 hits no total) e um valor de dano base de 0.43 por hit no final do seu ataque (20 hits no total).<br>
                                        Ainda é importante lembrar que a pedra vermelha <b>(Rubi Mágico)</b> multiplica o dano do pet por um valor específico com base na raridade <b>(1.04, 1.08 ou 1.10)</b>. A pedra vermelha <b>não é</b> um buff de dano.<br></p></span></div>`;
  
    showModal();
    });
  
    // events that closes the modal window
    closeButton.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          hideModal();
      }
    });
  });