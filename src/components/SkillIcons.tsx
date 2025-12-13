export function SkillIcon({ name }: { name: string }) {
  const iconMap: Record<string, string> = {
    // Programming Languages
    'Python': '🐍',
    'C++': '⚙️',
    'C': '⚙️',
    'SQL': '🗄️',
    'JavaScript': '📜',
    
    // Data & MLOps
    'Databricks': '🔷',
    'Delta Lake': '🔺',
    'dbt': '🔧',
    'Spark': '⚡',
    'Kafka': '📨',
    'Airflow': '🌪️',
    'MLflow': '📊',
    'Feature Store': '🏪',
    'DataHub': '🏛️',
    'Data Modeling': '📐',
    
    // GenAI
    'LangChain': '🔗',
    'RAG': '🔍',
    'Vector DBs': '🗃️',
    'AWS Bedrock': '🪨',
    'Mosaic AI': '🎨',
    'MCP': '🔌',
    
    // Cloud & DevOps
    'AWS': '☁️',
    'Docker': '🐳',
    'Kubernetes': '⚓',
  }
  
  return (
    <span className="skill-icon" title={name}>
      {iconMap[name] || '💼'}
    </span>
  )
}

