# AI-Driven Personalized Learning Pathways

Welcome to the **AI-Driven Personalized Learning Pathways** project! This repository contains the code and resources for creating an adaptive, AI-enhanced learning experience in VR. The project includes machine learning models for personalized recommendations, a Learning Insights Dashboard for real-time feedback, and Unity VR modules with adaptive features, all aimed at creating a customized learning journey for each student.

## Project Structure

```
ai-personalized-learning-pathways/
├── src/
│   ├── ai_model/              # Machine learning models for adaptation logic
│   ├── dashboard/             # Code for the Learning Insights Dashboard
│   ├── vr_adaptive_modules/   # Unity VR modules with adaptive features
│   └── utils/                 # Helper functions for data processing, analytics
├── docs/
│   └── README.md              # Detailed documentation
├── assets/
│   ├── icons/                 # Icons for the dashboard
│   └── models/                # 3D models used in VR simulations
├── tests/                     # Tests for ML models and VR modules
├── requirements.txt           # Dependencies for the project
├── .gitignore                 # Ignore unnecessary files
├── LICENSE                    # License (e.g., MIT)
└── README.md                  # Project overview and usage instructions
```

---

## Key Features

1. **Adaptive Learning Paths**: AI-driven recommendations for students to guide their learning journey, suggesting new modules, extra practice, or challenges based on their engagement and performance.

2. **Real-Time Feedback and Assessment**: Real-time tracking of student progress within simulations, providing personalized quizzes and interactive questions.

3. **Learning Insights Dashboard**: A web-based dashboard for teachers and parents to monitor student progress, view engagement data, and receive AI recommendations for next steps.

4. **Adaptive VR Experiences**: Unity VR modules that adjust dynamically based on student performance data, providing hints or modifying the difficulty level.

---

## Installation

### Prerequisites

1. **Unity 2021 or later**: Required for running VR modules.
2. **Python 3.8+**: Needed for AI model development and server back-end.
3. **Node.js**: Required for running the Learning Insights Dashboard front-end.
4. **Firebase or AWS (Optional)**: For storing student data and progress.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HussainAther/ai-personalized-learning-pathways.git
   cd ai-personalized-learning-pathways
   ```

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up the Unity Project**:
   - Open Unity and import the `vr_adaptive_modules` folder from `src/` to start using the VR adaptive features.
   - Ensure that necessary Unity packages (e.g., XR Interaction Toolkit) are installed.

4. **Run the Dashboard**:
   - Navigate to the `src/dashboard/` directory.
   - Install dependencies and start the server:
     ```bash
     npm install
     npm start
     ```
   - The dashboard will be accessible at `http://localhost:3000`.

---

## Usage

### 1. Running the Adaptive Learning Model

The AI model in `src/ai_model/` provides adaptive learning recommendations based on student data. To run it:

```bash
python src/ai_model/adaptive_learning_model.py
```

After running, this model outputs recommendations that can be used by the VR modules and dashboard.

### 2. Using the Learning Insights Dashboard

The Learning Insights Dashboard provides real-time insights into student progress and AI-driven recommendations.

- Start the dashboard server as described above.
- Open a browser and go to `http://localhost:3000` to view student engagement metrics, AI recommendations, and other data.

### 3. Interactive VR Modules

The VR modules in `src/vr_adaptive_modules/` provide adaptive learning experiences within Unity. Each module responds to real-time performance data, providing hints or adjusting challenges as necessary.

- Open Unity, import the modules, and run the simulations directly from the Unity editor.

---

## Directory Overview

- **src/ai_model/**: Contains the machine learning models that adapt the learning pathways based on student data. Example: `adaptive_learning_model.py` which suggests new modules or challenges.
- **src/dashboard/**: Code for the Learning Insights Dashboard, including the back-end (Node.js server) and front-end components (HTML, CSS, JavaScript).
- **src/vr_adaptive_modules/**: Unity scripts for VR modules that dynamically adjust based on performance metrics. Example: `AdaptiveChemistryLab.cs`, a Unity C# script.
- **src/utils/**: Helper functions for data processing, such as normalizing scores or aggregating data for analysis.
- **docs/**: Detailed documentation for each component and installation instructions.
- **assets/**: Icons and 3D models for use in the dashboard and VR simulations.
- **tests/**: Unit tests and integration tests for the AI models and VR modules.

---

## Testing

Unit and integration tests are included in the `tests/` directory to ensure that each component functions as expected.

- **Run all tests**:
  ```bash
  python -m unittest discover tests
  ```

This command will execute tests for the AI model and VR modules to verify accuracy and performance.

---

## Technologies Used

- **Python**: For machine learning models and data processing.
- **Unity (C#)**: For building adaptive VR simulations.
- **Node.js & Express**: Server for the Learning Insights Dashboard.
- **React**: For the dashboard’s front-end interface.
- **Firebase/AWS**: Optional data storage for real-time tracking and progress monitoring.

---

## Contributing

We welcome contributions to improve the adaptive learning pathways, whether through optimizing AI models, enhancing the VR modules, or adding new features to the dashboard. To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For questions, issues, or feedback, please reach out at [contact@alterlearning.com](mailto:contact@alterlearning.com).

---

Thank you for exploring **AI-Driven Personalized Learning Pathways**! Let’s work together to make learning more engaging and personalized for all students.

