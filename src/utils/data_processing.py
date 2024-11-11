import pandas as pd

def normalize_scores(data):
    return (data - data.min()) / (data.max() - data.min())

# Example usage
scores = pd.Series([70, 80, 90])
print(normalize_scores(scores))

