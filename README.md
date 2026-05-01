# 🍽️ NutriBem – Frontend

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/NutriBem/front?style=for-the-badge)](https://github.com/NutriBem/front/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/NutriBem/front?style=for-the-badge)](https://github.com/NutriBem/front/network)
[![GitHub issues](https://img.shields.io/github/issues/NutriBem/front?style=for-the-badge)](https://github.com/NutriBem/front/issues)

**Interface web para gestão de clínica de nutrição, com perfis diferenciados para pacientes, nutricionistas e recepcionistas.**

</div>

## 📖 Sobre o projeto

O **NutriBem** é um sistema completo para clínicas de nutrição, desenvolvido com React + Vite. Ele oferece:

- **Portal do paciente**: agendamento de consultas, histórico, perfil.
- **Portal do nutricionista**: gestão de agenda, prontuários, atendimentos.
- **Portal da recepção**: cadastro de pacientes/nutricionistas, gestão de horários.
- **Backoffice**: controle de usuários e permissões.

A aplicação consome a [API REST do NutriBem](https://github.com/NutriBem/back_end) e utiliza autenticação JWT.

## ✨ Funcionalidades

### Para pacientes
- Login e cadastro
- Visualizar e agendar consultas
- Acompanhar histórico de atendimentos
- Editar perfil (dados pessoais, senha)

### Para nutricionistas
- Visualizar agenda do dia
- Registrar evoluções e prescrições
- Acessar prontuários dos pacientes

### Para recepcionistas
- Cadastrar novos pacientes e nutricionistas
- Gerenciar agendamentos (criar, remanejar, cancelar)
- Listar e buscar pacientes/nutricionistas

### Administração
- Controle de perfis de acesso
- Auditoria de ações

## 🛠️ Tecnologias

| Categoria       | Tecnologias                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| Framework       | React 18 + Vite                                                             |
| Roteamento      | React Router DOM                                                            |
| Estilização     | CSS Modules / SASS (arquivos `.css` e `.scss`)                              |
| Requisições HTTP| Axios                                                                       |
| Notificações    | React Toastify, SweetAlert2                                                 |
| Gráficos        | Recharts                                                                    |
| Ícones          | Ant Design Icons, Headless UI                                               |                                                       |



### Pré‑requisitos
- Node.js 18+
- npm (ou yarn)

## 📁 Project Structure

```
front/
├── public/                 # Ícones, manifest, robôs
├── src/
│   ├── assets/             # Imagens, SVGs, logos
│   ├── components/         # Componentes reutilizáveis
│   │   ├── cabecalhoUser/
│   │   ├── cardNutriInformacao/
│   │   ├── cardPacienteInformacao/
│   │   └── compRecepcionista/
│   ├── config/             # Configuração do Axios
│   ├── connection/         # Módulos de API (AgendaPaths, appointmentPaths etc.)
│   ├── contexts/           # Contextos (ex: ProtectedRoute)
│   ├── errors/             # Páginas de erro
│   ├── hooks/              # Custom hooks 
│   ├── pages/              # Páginas da aplicação
│   │   ├── home/           # Página inicial pública
│   │   ├── nutricionista/  # Área do nutricionista (agenda, consultas)
│   │   ├── paciente/       # Área do paciente (agendamento, perfil, histórico)
│   │   └── recepcionista/  # Área da recepção (cadastros, agendamentos)
│   ├── stylesheet/         # Estilos globais
│   ├── utils/              # Funções auxiliares (clearLocalStorage, etc.)
│   ├── Routes.jsx          # Configuração de rotas
│   └── main.jsx            # Ponto de entrada
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```
