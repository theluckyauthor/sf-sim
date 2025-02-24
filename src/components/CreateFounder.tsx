import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { 
  updateFounder,
  updateStartup,
  updateLocation
} from '../store/gameSlice';
import { 
  FounderState,
  StartupState,
  LocationState
} from '../types/stats';
import ConfirmationScreen from './ConfirmationScreen';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 40px 20px;
  overflow-y: auto;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #4CAF50;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  color: #888;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #3a3a3a;
  border: 2px solid #4a4a4a;
  border-radius: 6px;
  color: white;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #3a3a3a;
  border: 2px solid #4a4a4a;
  border-radius: 6px;
  color: white;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const OptionCard = styled.button<{ selected?: boolean }>`
  background: ${props => props.selected ? 'linear-gradient(45deg, #4CAF50, #2196F3)' : '#3a3a3a'};
  border: 2px solid ${props => props.selected ? '#4CAF50' : '#4a4a4a'};
  border-radius: 8px;
  padding: 15px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`;

const OptionTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const OptionDescription = styled.div`
  font-size: 14px;
  color: #aaa;
`;

const backgrounds = [
  {
    id: 'stanford_dropout',
    title: 'Stanford Dropout',
    description: 'Left Stanford CS program to pursue your startup dreams. High potential, good network.',
    stats: {
      wellBeing: {
        health: 90,
        energy: 95,
        stress: 40
      },
      skills: {
        technical: 70,
        leadership: 40,
        networking: 60,
        fundraising: 50,
        experience: 30
      },
      reputation: {
        personal: 60,
        network: 70
      },
      finances: {
        personalFunds: 50000,
        salary: 0,
        investments: 0
      }
    }
  },
  {
    id: 'bootcamp_grad',
    title: 'Bootcamp Graduate',
    description: 'Completed a coding bootcamp. Hungry for success, but limited savings.',
    stats: {
      wellBeing: {
        health: 85,
        energy: 90,
        stress: 50
      },
      skills: {
        technical: 50,
        leadership: 30,
        networking: 40,
        fundraising: 30,
        experience: 20
      },
      reputation: {
        personal: 30,
        network: 40
      },
      finances: {
        personalFunds: 15000,
        salary: 0,
        investments: 0
      }
    }
  },
  {
    id: 'tech_veteran',
    title: 'Big Tech Veteran',
    description: 'Ex-FAANG engineer with savings but higher expectations.',
    stats: {
      wellBeing: {
        health: 80,
        energy: 75,
        stress: 30
      },
      skills: {
        technical: 85,
        leadership: 70,
        networking: 75,
        fundraising: 60,
        experience: 80
      },
      reputation: {
        personal: 70,
        network: 80
      },
      finances: {
        personalFunds: 200000,
        salary: 0,
        investments: 50000
      }
    }
  },
  {
    id: 'indie_hacker',
    title: 'Indie Hacker',
    description: 'Self-taught developer with viral GitHub projects.',
    stats: {
      wellBeing: {
        health: 88,
        energy: 85,
        stress: 45
      },
      skills: {
        technical: 75,
        leadership: 45,
        networking: 55,
        fundraising: 40,
        experience: 50
      },
      reputation: {
        personal: 50,
        network: 60
      },
      finances: {
        personalFunds: 25000,
        salary: 0,
        investments: 5000
      }
    }
  }
];

const startupRoles = [
  {
    id: 'technical_founder',
    title: 'Technical Founder',
    description: 'You build the product. +Product development, -Fundraising',
    stats: {
      skills: {
        technical: 30,
        leadership: 10,
        networking: 0,
        fundraising: -10,
        experience: 10,
        marketing: 0,
        execution: 20,
        growth: 10,
        sustainability: 15
      },
      startup: {
        product: {
          quality: 20,
          innovation: 15
        },
        team: {
          productivity: 20
        }
      }
    }
  },
  {
    id: 'business_founder',
    title: 'Business Founder',
    description: 'You handle business & fundraising. +Fundraising, -Product development',
    stats: {
      skills: {
        technical: -10,
        leadership: 20,
        networking: 20,
        fundraising: 30,
        experience: 10,
        marketing: 0,
        execution: 0,
        growth: 0,
        sustainability: 0
      },
      startup: {
        market: {
          brandReputation: 15,
          marketFit: 20
        },
        finances: {
          burnRate: -10
        }
      }
    }
  },
  {
    id: 'visionary_founder',
    title: 'Visionary Founder',
    description: "You are the idea person. +Marketing, -Execution",
    stats: {
      skills: {
        technical: 0,
        leadership: 25,
        networking: 15,
        fundraising: 20,
        experience: 10,
        marketing: 25,
        execution: -10,
        growth: 0,
        sustainability: 0
      },
      startup: {
        product: {
          innovation: 25
        },
        market: {
          socialPresence: 20,
          brandReputation: 20
        }
      }
    }
  },
  {
    id: 'growth_founder',
    title: 'Growth Hacker',
    description: 'You focus on growth at all costs. +User Acquisition, -Sustainability',
    stats: {
      skills: {
        technical: 10,
        leadership: 15,
        networking: 25,
        fundraising: 15,
        experience: 10,
        marketing: 0,
        execution: 0,
        growth: 25,
        sustainability: -10
      },
      startup: {
        market: {
          userTraction: 25,
          socialPresence: 20
        },
        finances: {
          burnRate: 15
        }
      }
    }
  }
];

const startupTypes = [
  {
    id: 'ai_startup',
    title: 'AI/ML Startup',
    description: 'Building the next generation of AI tools',
    stats: {
      product: {
        innovation: 30,
        quality: 20,
        mvpProgress: 10
      },
      market: {
        marketFit: 20,
        brandReputation: 25
      },
      finances: {
        burnRate: 30,
        valuation: 2000000
      }
    }
  },
  {
    id: 'saas_startup',
    title: 'B2B SaaS',
    description: 'Enterprise software solutions',
    stats: {
      product: {
        quality: 25,
        innovation: 15,
        mvpProgress: 15
      },
      market: {
        marketFit: 25,
        userTraction: 15
      },
      finances: {
        burnRate: 20,
        valuation: 1000000
      }
    }
  },
  {
    id: 'crypto_startup',
    title: 'Web3/Crypto',
    description: 'Decentralized applications and protocols',
    stats: {
      product: {
        innovation: 35,
        quality: 15,
        mvpProgress: 10
      },
      market: {
        socialPresence: 30,
        brandReputation: 20
      },
      finances: {
        burnRate: 35,
        valuation: 3000000
      }
    }
  },
  {
    id: 'social_startup',
    title: 'Social Impact',
    description: 'Technology for social good',
    stats: {
      product: {
        quality: 20,
        innovation: 20,
        mvpProgress: 15
      },
      market: {
        brandReputation: 25,
        socialPresence: 25
      },
      finances: {
        burnRate: 15,
        valuation: 500000
      }
    }
  }
];

const districts = [
  {
    id: 'soma',
    title: 'SOMA',
    description: 'Startup central. Close to VCs but expensive.',
    stats: {
      wellBeing: {
        stress: 10
      },
      skills: {
        networking: 20,
        fundraising: 15
      },
      finances: {
        burnRate: 5000
      },
      startup: {
        market: {
          brandReputation: 15,
          socialPresence: 10
        }
      }
    }
  },
  {
    id: 'mission',
    title: 'Mission District',
    description: 'Hip area with great food and culture.',
    stats: {
      wellBeing: {
        stress: 5,
        health: 10
      },
      skills: {
        networking: 10
      },
      finances: {
        burnRate: 3500
      },
      startup: {
        team: {
          culture: 15,
          morale: 10
        }
      }
    }
  },
  {
    id: 'hayes_valley',
    title: 'Hayes Valley',
    description: 'Trendy neighborhood near Twitter HQ.',
    stats: {
      wellBeing: {
        stress: 8
      },
      skills: {
        networking: 15
      },
      finances: {
        burnRate: 4500
      },
      startup: {
        market: {
          socialPresence: 15
        }
      }
    }
  },
  {
    id: 'richmond',
    title: 'Richmond District',
    description: 'Quieter, foggy, more affordable.',
    stats: {
      wellBeing: {
        stress: -5,
        health: 5
      },
      finances: {
        burnRate: 2500
      },
      startup: {
        team: {
          morale: 5
        }
      }
    }
  }
];

const CreateFounder: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    founderName: '',
    background: backgrounds[0].id,
    role: startupRoles[0].id,
    startupName: '',
    startupType: startupTypes[0].id,
    district: districts[0].id,
    catchphrase: '',
  });

  const selectedBackground = backgrounds.find(bg => bg.id === formData.background);
  const selectedRole = startupRoles.find(role => role.id === formData.role);
  const selectedStartupType = startupTypes.find(type => type.id === formData.startupType);
  const selectedDistrict = districts.find(d => d.id === formData.district);

  const handleContinue = () => {
    if (!selectedBackground || !selectedRole || !selectedStartupType || !selectedDistrict) return;
    if (!formData.founderName || !formData.startupName) return;
    setShowConfirmation(true);
  };

  const handleBack = () => {
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    if (!selectedBackground || !selectedRole || !selectedStartupType || !selectedDistrict) return;

    // Initialize founder state
    const founderState: FounderState = {
      name: formData.founderName,
      background: formData.background,
      role: formData.role,
      catchphrase: formData.catchphrase,
      wellBeing: {
        health: selectedBackground.stats.wellBeing.health + (selectedDistrict.stats.wellBeing?.health || 0),
        energy: selectedBackground.stats.wellBeing.energy,
        stress: selectedBackground.stats.wellBeing.stress + (selectedDistrict.stats.wellBeing?.stress || 0)
      },
      skills: {
        technical: selectedBackground.stats.skills.technical + (selectedRole.stats.skills.technical || 0),
        leadership: selectedBackground.stats.skills.leadership + (selectedRole.stats.skills.leadership || 0),
        networking: selectedBackground.stats.skills.networking + 
                   (selectedRole.stats.skills.networking || 0) + 
                   (selectedDistrict.stats.skills?.networking || 0),
        fundraising: selectedBackground.stats.skills.fundraising + 
                    (selectedRole.stats.skills.fundraising || 0) +
                    (selectedDistrict.stats.skills?.fundraising || 0),
        marketing: selectedRole.stats.skills.marketing || 0,
        execution: selectedRole.stats.skills.execution || 0,
        growth: selectedRole.stats.skills.growth || 0,
        sustainability: selectedRole.stats.skills.sustainability || 0
      },
      reputation: selectedBackground.stats.reputation,
      finances: selectedBackground.stats.finances
    };

    // Initialize startup state
    const startupState: StartupState = {
      name: formData.startupName,
      type: formData.startupType,
      stage: 'ideation',
      milestones: {
        activeMilestones: [],
        completedMilestones: [],
        achievements: []
      },
      product: {
        mvpProgress: selectedStartupType.stats.product.mvpProgress,
        quality: selectedStartupType.stats.product.quality + (selectedRole.stats.startup?.product?.quality || 0),
        innovation: selectedStartupType.stats.product.innovation + (selectedRole.stats.startup?.product?.innovation || 0),
        development: 0,
        marketFit: (selectedStartupType.stats.market?.marketFit || 0)
      },
      team: {
        size: 1,
        morale: 100 + (selectedDistrict.stats.startup?.team?.morale || 0),
        productivity: (selectedRole.stats.startup?.team?.productivity || 0),
        culture: (selectedDistrict.stats.startup?.team?.culture || 0)
      },
      finances: {
        cash: founderState.finances.personalFunds,
        revenue: 0,
        burnRate: selectedStartupType.stats.finances.burnRate + selectedDistrict.stats.finances.burnRate,
        valuation: selectedStartupType.stats.finances.valuation
      },
      market: {
        userTraction: (selectedRole.stats.startup?.market?.userTraction || 0),
        brandReputation: (selectedStartupType.stats.market?.brandReputation || 0) + 
                        (selectedRole.stats.startup?.market?.brandReputation || 0) +
                        (selectedDistrict.stats.startup?.market?.brandReputation || 0),
        socialPresence: (selectedRole.stats.startup?.market?.socialPresence || 0),
        marketFit: (selectedStartupType.stats.market?.marketFit || 0),
        userGrowth: 0
      }
    };

    // Initialize location state
    const locationState: LocationState = {
      district: selectedDistrict.title,
      type: 'home',
      rent: String(selectedDistrict.stats.finances.burnRate),
      networkingPotential: String(selectedDistrict.stats.skills?.networking || 0)
    };

    // Update the game state
    dispatch(updateFounder({
      name: formData.founderName,
      background: formData.background,
      catchphrase: formData.catchphrase,
      role: formData.role,
      wellBeing: {
        health: selectedBackground.stats.wellBeing.health + (selectedDistrict.stats.wellBeing?.health || 0),
        energy: selectedBackground.stats.wellBeing.energy,
        stress: selectedBackground.stats.wellBeing.stress + (selectedDistrict.stats.wellBeing?.stress || 0)
      },
      skills: {
        technical: selectedBackground.stats.skills.technical + (selectedRole.stats.skills.technical || 0),
        leadership: selectedBackground.stats.skills.leadership + (selectedRole.stats.skills.leadership || 0),
        networking: selectedBackground.stats.skills.networking + 
                   (selectedRole.stats.skills.networking || 0) + 
                   (selectedDistrict.stats.skills?.networking || 0),
        fundraising: selectedBackground.stats.skills.fundraising + 
                    (selectedRole.stats.skills.fundraising || 0) +
                    (selectedDistrict.stats.skills?.fundraising || 0),
        marketing: selectedRole.stats.skills.marketing || 0,
        execution: selectedRole.stats.skills.execution || 0,
        growth: selectedRole.stats.skills.growth || 0,
        sustainability: selectedRole.stats.skills.sustainability || 0
      },
      reputation: selectedBackground.stats.reputation,
      finances: selectedBackground.stats.finances
    }));
    dispatch(updateStartup(startupState));
    dispatch(updateLocation(locationState));
    
    navigate('/game');
  };

  if (showConfirmation) {
    return (
      <ConfirmationScreen
        founderData={{
          selectedBackground,
          selectedRole,
          selectedStartupType,
          selectedDistrict,
          formData,
        }}
        onBack={handleBack}
        onConfirm={handleConfirm}
      />
    );
  }

  return (
    <Container>
      <FormContainer>
        {/* Founder Card */}
        <Card>
          <CardTitle>👤 Create Your Founder</CardTitle>
          
          <Section>
            <Label>What's your name, future unicorn founder?</Label>
            <Input
              type="text"
              name="founderName"
              value={formData.founderName}
              onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
              placeholder="Elon Zuck Gates"
            />
          </Section>

          <Section>
            <Label>Your Background</Label>
            <OptionGrid>
              {backgrounds.map(bg => (
                <OptionCard
                  key={bg.id}
                  selected={formData.background === bg.id}
                  onClick={() => setFormData({ ...formData, background: bg.id })}
                >
                  <OptionTitle>{bg.title}</OptionTitle>
                  <OptionDescription>{bg.description}</OptionDescription>
                </OptionCard>
              ))}
            </OptionGrid>
          </Section>

          <Section>
            <Label>Your Role</Label>
            <OptionGrid>
              {startupRoles.map(role => (
                <OptionCard
                  key={role.id}
                  selected={formData.role === role.id}
                  onClick={() => setFormData({ ...formData, role: role.id })}
                >
                  <OptionTitle>{role.title}</OptionTitle>
                  <OptionDescription>{role.description}</OptionDescription>
                </OptionCard>
              ))}
            </OptionGrid>
          </Section>
        </Card>

        {/* Startup Card */}
        <Card>
          <CardTitle>🚀 Design Your Startup</CardTitle>

          <Section>
            <Label>What's your startup called?</Label>
            <Input
              type="text"
              name="startupName"
              value={formData.startupName}
              onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
              placeholder="AI.io.chain.web3"
            />
          </Section>

          <Section>
            <Label>Startup Type</Label>
            <OptionGrid>
              {startupTypes.map(type => (
                <OptionCard
                  key={type.id}
                  selected={formData.startupType === type.id}
                  onClick={() => setFormData({ ...formData, startupType: type.id })}
                >
                  <OptionTitle>{type.title}</OptionTitle>
                  <OptionDescription>{type.description}</OptionDescription>
                </OptionCard>
              ))}
            </OptionGrid>
          </Section>

          <Section>
            <Label>Where will you live?</Label>
            <OptionGrid>
              {districts.map(district => (
                <OptionCard
                  key={district.id}
                  selected={formData.district === district.id}
                  onClick={() => setFormData({ ...formData, district: district.id })}
                >
                  <OptionTitle>{district.title}</OptionTitle>
                  <OptionDescription>{district.description}</OptionDescription>
                </OptionCard>
              ))}
            </OptionGrid>
          </Section>

          <Section>
            <Label>Your startup's catchphrase:</Label>
            <Input
              type="text"
              name="catchphrase"
              value={formData.catchphrase}
              onChange={(e) => setFormData({ ...formData, catchphrase: e.target.value })}
              placeholder="Making the world a better place through AI-powered blockchain solutions"
            />
          </Section>
        </Card>
      </FormContainer>
      <Button onClick={handleContinue}>Review Your Choices</Button>
    </Container>
  );
};

export default CreateFounder; 