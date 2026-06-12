# Atividade - hotelreservas

Este repositório contém uma atividade prática de um sistema de gerenciamento de hotel, cobrindo o controle de quartos, hóspedes e reservas. O projeto possui arquitetura dividida entre Front-end e Back-end.

## Tecnologias e Ferramentas

*   **VS Code:** Editor de código utilizado no desenvolvimento.
*   **XAMPP:** Servidor local (Apache) e banco de dados (MySQL).
*   **Insomnia:** Utilizado para testar os endpoints da API.

## Como Executar o Projeto

1.  **Configurar o Banco de Dados:**
    *   Abra o **XAMPP** e ative o **Apache** e o **MySQL**.
    *   Acesse o `phpMyAdmin` (`http://localhost/phpmyadmin/`).
    *   Crie um banco de dados e importe o arquivo de script que está na pasta `./docs`.

2.  **Rodar a API (Back-end):**
    *   Certifique-se de que a pasta `./api` está configurada corretamente no seu servidor local (ex: dentro de `htdocs` no XAMPP) para responder às requisições.

3.  **Testar as Requisições:**
    *   Abra o **Insomnia**.
    *   Importe o arquivo de rotas disponível na pasta `./docs` para testar os endpoints de quartos, hóspedes e reservas.

4.  **Rodar o Front-end:**
    *   Abra a pasta `./web` no **VS Code** e execute o ambiente para visualizar a interface do usuário.



