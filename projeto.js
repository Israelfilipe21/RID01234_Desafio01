function markAsDone(button) {
      const task = button.closest('.task');
      task.classList.add('done');
      button.remove();

      const checkmark = document.createElement('div');
      checkmark.className = 'checkmark';
      checkmark.textContent = '✔️';
      task.appendChild(checkmark);

      updateFooter();
    }

    function updateFooter() {
      const doneCount = document.querySelectorAll('.task.done').length;
      document.getElementById('footerCount').textContent = `${doneCount} tarefa${doneCount > 1 ? 's' : ''} concluída${doneCount > 1 ? 's' : ''}`;
    }

    function addTask() {
      const taskName = document.getElementById('taskName').value.trim();
      const taskLabel = document.getElementById('taskLabel').value.trim();

      if (!taskName || !taskLabel) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const today = new Date();
      const formattedDate = today.toLocaleDateString('pt-BR');

      const taskHTML = `
        <div class="task">
          <div>
            <strong>${taskName}</strong>
            <div class="tags">
              <span class="tag">${taskLabel}</span>
              <span class="date">Criado em: ${formattedDate}</span>
            </div>
          </div>
          <button class="concluir-btn" onclick="markAsDone(this)">Concluir</button>
        </div>
      `;

      document.getElementById('taskList').insertAdjacentHTML('afterbegin', taskHTML);

      // Limpar campos
      document.getElementById('taskName').value = '';
      document.getElementById('taskLabel').value = '';
    }