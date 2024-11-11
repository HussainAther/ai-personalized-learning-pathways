import numpy as np
import pandas as pd

def recommend_next_module(student_data):
    recommendations = ["Basic Concepts", "Intermediate Challenges"]
    if student_data['score'] < 50:
        return recommendations[0]
    else:
        return recommendations[1]

# Example usage
student_data = {'score': 45}
print("Recommended module:", recommend_next_module(student_data))

