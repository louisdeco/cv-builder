export const sampleCV = {
    personalInfo: {
        fullName: "John Doe",
        email: "john.doe@email.com",
        phone: "+33 6 19 21 76 28",
        address: "237 rue Saint-Martin, Paris, 75003",
    },
    experience: [
        {
            id: 2,
            company: "Mistral AI",
            location: "Paris",
            position: "Senior Data Scientist",
            startDate: "2021-01",
            endDate:"Present",
            description: "Led ML research to enhance large language model performance, improving efficiency by 23% while reducing computational costs. Designed distributed training pipelines that accelerated iteration cycles by 40% and implemented RLHF techniques reducing harmful outputs by 35%. Developed automated quality assessment systems for training data across 12 European languages. Published 3 peer-reviewed papers at NeurIPS/ICLR and mentored junior data scientists. Expertise in Python, PyTorch, JAX, Kubernetes, and HuggingFace Transformers."
        },
        {
            id: 1,
            company: "Deepki",
            location: "Paris",
            position: "Data Scientist",
            startDate: "2018-01",
            endDate: "2020-12",
            description: "Developed predictive models for energy consumption forecasting in commercial buildings, achieving 85% accuracy across 500+ properties. Built automated data pipelines processing IoT sensor data to identify energy optimization opportunities and created ML algorithms for ESG scoring. Collaborated with product teams to integrate models into the platform and analyzed real estate market trends using regression analysis. Contributed to client reporting dashboards and A/B testing initiatives. Technologies include Python, scikit-learn, pandas, SQL, AWS, and Tableau."
        }
    ],
    education: [
        {
            id: 1,
            institution: "CentraleSupélec",
            location: "Paris",
            degree: "Msc. Computer Sciences",
            startDate: "2013-01",
            endDate: "2017-12",
        }
    ]
}