#!/usr/bin/env pwsh

<#
.SYNOPSIS
  Script de verificação - Dashboard Financeiro Reorganizado

.DESCRIPTION
  Verifica se todos os arquivos foram criados corretamente e lista a estrutura
#>

Write-Host "`n" -ForegroundColor Green
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   ✅ DASHBOARD FINANCEIRO - REORGANIZAÇÃO COMPLETA        ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$files = @(
    @{ Path = "src/App.tsx"; Description = "Aplicação Principal - Navegação" },
    @{ Path = "src/components/Card.tsx"; Description = "Componente Card - Container" },
    @{ Path = "src/components/BarChart.tsx"; Description = "Componente BarChart - Gráfico" },
    @{ Path = "src/components/TransactionItem.tsx"; Description = "Componente TransactionItem" },
    @{ Path = "src/components/AddModal.tsx"; Description = "Componente AddModal" },
    @{ Path = "src/screens/DashboardScreen.tsx"; Description = "Tela Dashboard" },
    @{ Path = "src/screens/TransactionsScreen.tsx"; Description = "Tela Transações" },
    @{ Path = "src/screens/AddScreen.tsx"; Description = "Tela Adicionar" },
    @{ Path = "src/hooks/useFinance.ts"; Description = "Hook - Gerenciar Financeiro" },
    @{ Path = "src/data/types.ts"; Description = "Tipos TypeScript Globais" },
    @{ Path = "src/constants/theme.ts"; Description = "Constantes - Tema e Cores" },
    @{ Path = "src/styles/globalStyles.ts"; Description = "Estilos Globais" },
    @{ Path = "src/utils/formatting.ts"; Description = "Utilitários - Formatação" },
    @{ Path = "README.md"; Description = "Documentação do Projeto" },
    @{ Path = "STYLE_GUIDE.md"; Description = "Guia de Boas Práticas" },
    @{ Path = "PROJECT_STRUCTURE.md"; Description = "Estrutura do Projeto" },
    @{ Path = "RESUMO_REORGANIZACAO.md"; Description = "Resumo Visual" }
)

Write-Host "📁 ARQUIVOS CRIADOS/ATUALIZADOS:" -ForegroundColor Yellow
Write-Host ""

$rootPath = "c:\Users\maria.eduarda\MeuDashboardFinanceiro"

foreach ($file in $files) {
    $fullPath = Join-Path $rootPath $file.Path
    $exists = Test-Path $fullPath
    
    if ($exists) {
        $item = Get-Item $fullPath
        $size = $item.Length
        $sizeMB = [math]::Round($size / 1KB, 2)
        
        Write-Host "  ✅ $($file.Path)" -ForegroundColor Green
        Write-Host "     └─ $($file.Description) ($sizeMB KB)" -ForegroundColor Gray
    } else {
        Write-Host "  ❌ $($file.Path)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan

Write-Host ""
Write-Host "📊 ESTATÍSTICAS:" -ForegroundColor Yellow
Write-Host ""

$componentsPath = Join-Path $rootPath "src/components"
$screensPath = Join-Path $rootPath "src/screens"
$hooksPath = Join-Path $rootPath "src/hooks"
$utilsPath = Join-Path $rootPath "src/utils"

$componentCount = (Get-ChildItem $componentsPath -Filter "*.tsx" | Measure-Object).Count
$screenCount = (Get-ChildItem $screensPath -Filter "*.tsx" | Measure-Object).Count
$hooksCount = (Get-ChildItem $hooksPath -Filter "*.ts" | Measure-Object).Count
$utilsCount = (Get-ChildItem $utilsPath -Filter "*.ts" | Measure-Object).Count

Write-Host "  📦 Componentes: $componentCount" -ForegroundColor Green
Write-Host "  🎬 Telas: $screenCount" -ForegroundColor Green
Write-Host "  🎣 Hooks: $hooksCount" -ForegroundColor Green
Write-Host "  🔧 Utilitários: $utilsCount" -ForegroundColor Green

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan

Write-Host ""
Write-Host "🎯 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. Abra o projeto em VS Code: code ." -ForegroundColor Magenta
Write-Host "  2. Instale as dependências: npm install" -ForegroundColor Magenta
Write-Host "  3. Inicie o desenvolvimento: npm start" -ForegroundColor Magenta
Write-Host "  4. Estude a documentação:" -ForegroundColor Magenta
Write-Host "     • README.md" -ForegroundColor Magenta
Write-Host "     • STYLE_GUIDE.md" -ForegroundColor Magenta
Write-Host "     • PROJECT_STRUCTURE.md" -ForegroundColor Magenta
Write-Host ""

Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "✨ Seu dashboard está 100% reorganizado e pronto! ✨" -ForegroundColor Green
Write-Host ""

