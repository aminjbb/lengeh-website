param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('tech-lead','architect','state-master','ui-crafter','navigator','form-wizard','auditor')]
  [string] $Agent,

  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)]
  [string[]] $Request
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $PSScriptRoot "$Agent.agent.json"
$manifest = Get-Content $manifestPath -Raw | ConvertFrom-Json
$instructionPath = Join-Path $PSScriptRoot $manifest.instruction.path
$instruction = Get-Content $instructionPath -Raw
$requestText = ($Request -join ' ')

$prompt = @"
You are $($manifest.metadata.name) for the project at $repoRoot.
Follow the role instruction below. Inspect the repository before making claims.
Return the concrete result, changed files, checks, and unresolved risks.

ROLE INSTRUCTION:
$instruction

USER REQUEST:
$requestText
"@

& codex exec --cd $repoRoot --full-auto $prompt
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
