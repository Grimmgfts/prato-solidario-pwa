# Prato Solidário — PWA para Gestão de Doações e Controle FIFO

O **Prato Solidário** é um Progressive Web Application (PWA) desenvolvido para otimizar o processo de triagem e distribuição de cestas básicas na ONG *Associação Amigos do Bairro*.

## 🚀 Funcionalidades Principais
- **Controle de Estoque FIFO (PEPS):** Priorização automática de lotes de alimentos com vencimento próximo.
- **Validação por CPF:** Checagem da regra de intervalo de 30 dias entre atendimentos.
- **Acessibilidade:** Interface adaptada conforme diretrizes WCAG 2.1 AA (dupla codificação, alto contraste e botões ampliados).

## 🛠️ Tecnologias Utilizadas
- **Front-end:** HTML5, CSS3, JavaScript (PWA / Bootstrap)
- **Back-end:** Python / Django
- **Integração Contínua (CI):** GitHub Actions
- **Testes:** Unittest / PyTest

## 📋 Regras de Negócio e Requisitos
- **RF01:** Controle e Visualização de Estoque
- **RF02:** Consulta por CPF e Validação da Regra dos 30 Dias
- **RF03:** Sinalização Visual do Estoque (Sistema Semáforo)
- **RNF02:** Segurança no tratamento de entradas (Máscara e Sanitização contra OWASP)
