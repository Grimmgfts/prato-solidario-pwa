const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Prato Solidário PWA</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; transition: 0.3s; }
                .normal { background-color: #ffffff; color: #000000; }
                .high-contrast { background-color: #000000; color: #ffff00; }
                button { padding: 10px 20px; font-size: 16px; cursor: pointer; margin-top: 20px; }
            </style>
        </head>
        <body id="corpo" class="normal">
            <h1>Prato Solidário PWA - Sistema em Operação</h1>
            <p>Status: Servidor rodando com sucesso e integrado ao MVP.</p>
            <hr>
            <h2>Recurso de Acessibilidade (Inclusão Digital - ODS 10)</h2>
            <p>Ative o modo de alto contraste para facilitar a visualização por usuários com baixa visão.</p>
            <button onclick="alternarContraste()">Ativar/Desativar Alto Contraste</button>

            <script>
                function alternarContraste() {
                    const body = document.getElementById('corpo');
                    if (body.classList.contains('normal')) {
                        body.classList.remove('normal');
                        body.classList.add('high-contrast');
                    } else {
                        body.classList.remove('high-contrast');
                        body.classList.add('normal');
                    }
                }
            </script>
        </body>
        </html>
    `);
});
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`[API Connect] Servidor rodando na porta ${PORT}`);
  });