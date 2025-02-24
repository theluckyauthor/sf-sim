const fs = require('fs');
const path = require('path');
const { GamePhase } = require('../types/stats');

// Helper function to convert old stats to new format
function convertOldStatsToNew(oldStats: any) {
  const founder: any = {};
  const company: any = {};

  // Convert founder stats
  if (oldStats.wellBeing) {
    founder.health = oldStats.wellBeing.health || 100;
    founder.energy = oldStats.wellBeing.energy || 100;
  }
  if (oldStats.skills) {
    founder.technical = oldStats.skills.technical || 50;
    founder.leadership = oldStats.skills.leadership || 50;
    // Combine fundraising/execution into business skill
    founder.business = Math.max(
      oldStats.skills.fundraising || 0,
      oldStats.skills.execution || 0,
      50
    );
  }
  if (oldStats.reputation?.personal) {
    founder.reputation = oldStats.reputation.personal;
  }
  if (oldStats.finances?.cash) {
    founder.cash = oldStats.finances.cash;
  }

  // Convert company stats
  if (oldStats.product) {
    company.productQuality = oldStats.product.quality || 0;
    company.marketFit = oldStats.product.marketFit || 0;
    company.userGrowth = oldStats.product.userGrowth || 0;
  }
  if (oldStats.team) {
    company.teamSize = oldStats.team.size || 1;
    company.teamMorale = oldStats.team.morale || 100;
    company.talent = oldStats.team.talent || 50;
  }
  if (oldStats.finances) {
    company.revenue = oldStats.finances.revenue || 0;
    company.runway = oldStats.finances.runway || 12;
    company.valuation = oldStats.finances.valuation || 0;
  }

  return { founder, company };
}

function processEventFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Convert old event format to new format
  content = content.replace(
    /export const (\w+): GameEvent = ({[\s\S]+?});/g,
    (match: string, eventName: string, eventContent: string) => {
      try {
        const oldEvent = eval(`(${eventContent})`);
        const newEvent = {
          id: oldEvent.id,
          category: oldEvent.category,
          title: oldEvent.title,
          description: oldEvent.description,
          conditions: {
            requiredPhase: oldEvent.conditions?.requiredPhase,
            activeMilestone: Array.isArray(oldEvent.conditions?.activeMilestone) 
              ? oldEvent.conditions.activeMilestone[0]
              : oldEvent.conditions?.activeMilestone,
            minimumStats: oldEvent.conditions?.minimumStats 
              ? convertOldStatsToNew(oldEvent.conditions.minimumStats)
              : undefined
          },
          impact: convertOldStatsToNew(oldEvent.impact || {}),
          choices: oldEvent.choices?.map((choice: any) => ({
            id: choice.id,
            text: choice.text,
            successChance: choice.successChance,
            impact: convertOldStatsToNew(choice.impact || {})
          })) || []
        };

        return `export const ${eventName}: GameEvent = ${JSON.stringify(newEvent, null, 2)};`;
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        return match;
      }
    }
  );

  fs.writeFileSync(filePath, content);
}

function refactorEvents(dir: string) {
  const files = fs.readdirSync(dir);
  
  files.forEach((file: string) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      refactorEvents(fullPath);
    } else if (file.endsWith('.ts')) {
      console.log(`Processing ${fullPath}`);
      processEventFile(fullPath);
    }
  });
}

// Run the refactor
refactorEvents(path.join(__dirname, '../events')); 