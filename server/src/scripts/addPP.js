const mongoose = require('mongoose');
const Project = require('../models/Project'); 
const Portfolio = require('../models/Portfolio'); 

// Connect to MongoDB
mongoose.connect('mongodb+srv://User:12qw@cluster0.qbmrcts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected');
        insertData();  // Call the function here after connection is established
    })
    .catch(err => console.log(err));

// Portfolios Data
// Portfolios Data
const portfolios = [
    {
        name: 'Renewable Energy Projects',
        projects: [
            { 
                name: 'Wind Power Project', 
                description: 'A wind farm generating clean electricity and reducing greenhouse gas emissions.',
                location: 'Texas, USA',
                type: 'Wind Power'
            },
            { 
                name: 'Solar Power Project', 
                description: 'A solar park harnessing solar energy to provide clean power to the grid.',
                location: 'California, USA',
                type: 'Solar Power'
            },
            { 
                name: 'Hydroelectric Power Project', 
                description: 'A hydroelectric dam producing renewable energy and supporting local ecosystems.',
                location: 'British Columbia, Canada',
                type: 'Hydroelectric Power'
            }
        ]
    },
    {
        name: 'Forestry and Land Use Projects',
        projects: [
            { 
                name: 'Reforestation Project', 
                description: 'Planting trees in deforested areas to capture CO2 and restore natural habitats.',
                location: 'Amazon Rainforest, Brazil',
                type: 'Reforestation'
            },
            { 
                name: 'Afforestation Project', 
                description: 'Creating new forests on previously non-forested land to absorb carbon and promote biodiversity.',
                location: 'Sahara Desert, Africa',
                type: 'Afforestation'
            },
            { 
                name: 'Forest Conservation Project', 
                description: 'Protecting existing forests from deforestation and degradation to maintain carbon storage.',
                location: 'Congo Basin, Africa',
                type: 'Forest Conservation'
            }
        ]
    }
];

async function insertData() {
    try {
        // Insert portfolios and projects
        for (const portfolioData of portfolios) {
            const portfolio = new Portfolio({ name: portfolioData.name });
            for (const projectData of portfolioData.projects) {
                const project = new Project({
                    name: projectData.name,
                    description: projectData.description,
                    location: projectData.location,
                    type: projectData.type
                });
                await project.save();
                portfolio.projects.push(project);
            }
            await portfolio.save();
        }
        console.log('Portfolios and projects added successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    }
}
