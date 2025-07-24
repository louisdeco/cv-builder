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
            isVisible: true,
            company: "Mistral AI",
            location: "Paris, France",
            position: "Senior Data Scientist",
            startDate: "01/2021",
            endDate:"Present",
            description: "Led ML research to enhance large language model performance, improving efficiency by 23% while reducing computational costs. Designed distributed training pipelines that accelerated iteration cycles by 40% and implemented RLHF techniques reducing harmful outputs by 35%. Developed automated quality assessment systems for training data across 12 European languages. Published 3 peer-reviewed papers at NeurIPS/ICLR and mentored junior data scientists. Expertise in Python, PyTorch, JAX, Kubernetes, and HuggingFace Transformers."
        },
        {
            id: 1,
            isVisible: true,
            company: "Deepki",
            location: "Paris, France",
            position: "Data Scientist",
            startDate: "01/2018",
            endDate: "12/2020",
            description: "Developed predictive models for energy consumption forecasting in commercial buildings, achieving 85% accuracy across 500+ properties. Built automated data pipelines processing IoT sensor data to identify energy optimization opportunities and created ML algorithms for ESG scoring. Collaborated with product teams to integrate models into the platform and analyzed real estate market trends using regression analysis. Contributed to client reporting dashboards and A/B testing initiatives. Technologies include Python, scikit-learn, pandas, SQL, AWS, and Tableau."
        }
    ],
    education: [
        {
            id: 1,
            isVisible: true,
            institution: "CentraleSupélec",
            location: "Paris, France",
            degree: "Msc. Computer Sciences",
            startDate: "01/2013",
            endDate: "12/2017",
        }
    ]
}