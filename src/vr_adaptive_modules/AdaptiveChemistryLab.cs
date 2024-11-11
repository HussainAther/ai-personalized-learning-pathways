using UnityEngine;

public class AdaptiveChemistryLab : MonoBehaviour
{
    public GameObject hintPanel;

    void Start()
    {
        AdjustDifficultyBasedOnData();
    }

    void AdjustDifficultyBasedOnData()
    {
        bool needsHelp = CheckStudentPerformance();
        if (needsHelp)
        {
            hintPanel.SetActive(true);
        }
    }

    bool CheckStudentPerformance()
    {
        return Random.Range(0, 10) < 5;
    }
}

