document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var showInfoButton = document.getElementById('calc-info');
    var closeButton = document.querySelector('.close-button');
    var modalContent = modal.querySelector('.modal-content');
    var modalText = document.getElementById('modalText');
    var body = document.body;
  
    function showModal() {
        overlay.classList.add('show');
        modal.style.display = 'block';
        body.classList.add('no-scroll');
        setTimeout(function() {
            modalContent.classList.add('show');
        }, 10);
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
  
        modalText.innerHTML = `
            <div class="modal-header-custom">
                <h2 class="modal-title-main">Calculadora de Dano</h2>
                <div class="modal-separator"></div>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#F2F4F4;">[Níveis]</h3>
                <ul class="info-list">
                    <li>Em <b class="highlight-yellow">Nível do personagem</b> você irá inserir o nível do seu personagem. Não é o chase level!</li>
                    <li>Em <b class="highlight-yellow">Nível do monstro</b> você irá inserir o nível do monstro. Os monstros da tabela de inimigos são considerados nível 90 automaticamente.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color: #FFB347;">[Status]</h3>
                <ul class="info-list">
                    <li>Aqui você irá inserir os valores de status do seu personagem.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#9370DB;">[Contaminação]</h3>
                <ul class="info-list">
                    <li>Em <b class="highlight-yellow">Debuff de Contaminação</b>, insira o valor da dungeon. Não é necessário preencher se a fase não tiver contaminação.</li>
                    <li>Em <b class="highlight-yellow">Resistência a Contaminação</b>, insira seus status de resistência.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#CE6363;">[Buffs]</h3>
                <p class="info-desc">Todos os buffs possuem uma caixa de seleção. Marque para que a calculadora considere aquele valor.</p>
                <ul class="info-list">
                    <li><b class="highlight-yellow">Dano de todas as habilidades:</b> Valor presente na janela de status do seu personagem.</li>
                    <li><b class="highlight-yellow">Dano ao atacar / ser atacado:</b> Valor presente na janela de status do seu personagem.</li>
                    <li><b class="highlight-yellow">Dano causado a chefes:</b> Lembre-se que nem todos os inimigos são chefes!</li>
                    <li><b class="highlight-yellow">Ataque pelas costas:</b> Se não marcar a caixa, será usado apenas o valor base do jogo (30%).</li>
                    <li><b class="highlight-yellow">Outros buffs:</b> Soma de buffs extras que não estejam presentes na janela de buffs (Botão +).</li>
                    <li><b class="highlight-yellow">Debuffs de quebrar defesa:</b> Soma de debuffs que não estejam presentes na janela de debuffs (Botão +).</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#5DADE2;">[Dano Base]</h3>
                <ul class="info-list">
                    <li><b class="highlight-yellow">Dano de tier específico:</b> Soma das propriedades do despertar/runas que fortalecem um tier (ex: Dano de Habilidade Normal, Dano de MP3).</li>
                    <li><b class="highlight-yellow">Dano de skill específica:</b> Soma das runas que fortalecem uma habilidade específica.</li>
                    <li><b class="highlight-yellow">Dano base:</b> O valor de dano base que o jogo usa para uma skill/comando básico/pet (ou um valor aleatório qualquer para você testar). Você pode consultar a <a href="https://docs.google.com/spreadsheets/d/1FGxKHQuwz_Jx-GdYd6647FiAE9UbS6mZgufXor9_DZk/edit#gid=722314000" target="_blank" class="inline-link">Tabela de Dano Base</a>.</li>
                    <li><b class="highlight-yellow">Calcular Dano base <ion-icon name="swap-horizontal-outline"></ion-icon></b>: Caso alguma skill/comando/pet não esteja disponível na tabela de dano, é possível estimar o dano base inserindo o dano visto dentro do jogo.</li>
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-title" style="color:#2effa8;">[Tipo de Dano]</h3>
                <ul class="info-list">
                    <li><b class="highlight-yellow">Comando Básico:</b> Golpes com Z, X ou C. (Ataque Especial não se aplica).</li>
                    <li><b class="highlight-yellow">Dano de Skill:</b> Maioria das habilidades, técnicas ativas e invocações.</li>
                    <li><b class="highlight-yellow">Dano de Pet:</b> Exclusivo para mascotes. (Ataque Especial não se aplica).<br>
                </ul>
            </div>
            <div class="section-footer"><br></div>
        `;
        showModal();
    });
  
    closeButton.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') hideModal();
    });
});