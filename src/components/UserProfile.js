import React, { useState } from "react";
import "./Component.css"; // Make sure this is the correct path to your CSS file

function UserProfile() {
  // State hooks for each trait
  const [extraversion, setExtraversion] = useState("");
  const [introversion, setIntroversion] = useState("");
  const [sensing, setSensing] = useState("");
  const [intuition, setIntuition] = useState("");
  const [thinking, setThinking] = useState("");
  const [feeling, setFeeling] = useState("");
  const [judging, setJudging] = useState("");
  const [perceiving, setPerceiving] = useState("");
  const [error, setError] = useState("");

  const validateInput = (setter, opposingValue, value) => {
    const numValue = parseInt(value, 10);
    if (
      (opposingValue !== "" &&
        numValue + parseInt(opposingValue, 10) !== 100) ||
      numValue > 100
    ) {
      setter(value);
      setError(
        "The sum of each trait pair must equal 100 and neither can be greater than 100."
      );
    } else {
      setError("");
      setter(value);
    }
  };

  const handleProfileSubmit = async () => {
    if (validateSubmission()) {
        try {
        const response = await fetch("/api/userprofile", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            extraversion,
            introversion,
            sensing,
            intuition,
            thinking,
            feeling,
            judging,
            perceiving,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            window.location.href = "/home";
        } else {
            alert(data.error || "An error occurred while updating the profile.");
        }
        } catch (error) {
            console.error("Error submitting profile:", error);
            alert("An error occurred while submitting the profile.");
        }
    } else {
        alert("Please make sure that the sum of each trait pair is 100 before submission.");
    }
  };

    const validateSubmission = () => {
        const extraversionNum = parseInt(extraversion, 10);
        const introversionNum = parseInt(introversion, 10);
        const sensingNum = parseInt(sensing, 10);
        const intuitionNum = parseInt(intuition, 10);
        const thinkingNum = parseInt(thinking, 10);
        const feelingNum = parseInt(feeling, 10);
        const judgingNum = parseInt(judging, 10);
        const perceivingNum = parseInt(perceiving, 10);
        return extraversionNum + introversionNum === 100 &&
            sensingNum + intuitionNum === 100 &&
            thinkingNum + feelingNum === 100 &&
            judgingNum + perceivingNum === 100 &&
            extraversionNum <= 100 &&
            introversionNum <= 100 &&
            sensingNum <= 100 &&
            intuitionNum <= 100 &&
            thinkingNum <= 100 &&
            feelingNum <= 100 &&
            judgingNum <= 100 &&
            perceivingNum <= 100;
    }

  return (
    <div className="profile-container">
      <div className="title userprofile-title text">Enter Your Scores</div>
      <p className="text">
        If you know your values for the Meyers-Briggs assessment, input your
        individual values given to you as a percent. If you have not taken the
        test, please do so{" "}
        <a
          href="https://www.16personalities.com/free-personality-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      {error && <p className="error-message text">{error}</p>}
      <div className="traits-container">
        <div className="trait-section">
        <div className="trait-pair extraversion-introversion text">
          <div className="trait-heading">Extraversion vs Introversion</div>
          <input
            className="input-field"
            type="number"
            value={extraversion}
            onChange={(e) =>
              validateInput(setExtraversion, introversion, e.target.value)
            }
            placeholder="Extraversion"
          />
          <input
            className="input-field text"
            type="number"
            value={introversion}
            onChange={(e) =>
              validateInput(setIntroversion, extraversion, e.target.value)
            }
            placeholder="Introversion"
          />
        </div>
        </div>
        <div className="trait-section">
        <div className="trait-pair sensing-intuition text">
          <div className="trait-heading">Sensing vs Intuition</div>
          <input
            className="input-field"
            type="number"
            value={sensing}
            onChange={(e) =>
              validateInput(setSensing, intuition, e.target.value)
            }
            placeholder="Sensing"
          />
          <input
            className="input-field"
            type="number"
            value={intuition}
            onChange={(e) =>
              validateInput(setIntuition, sensing, e.target.value)
            }
            placeholder="Intuition"
          />
          </div>
        </div>
        <div className="trait-section">
        <div className="trait-pair thinking-feeling text">
          <div className="trait-heading">Thinking vs Feeling</div>
          <input
            className="input-field"
            type="number"
            value={thinking}
            onChange={(e) =>
              validateInput(setThinking, feeling, e.target.value)
            }
            placeholder="Thinking"
          />
          <input
            className="input-field"
            type="number"
            value={feeling}
            onChange={(e) =>
              validateInput(setFeeling, thinking, e.target.value)
            }
            placeholder="Feeling"
          />
          </div>
        </div>
        <div className="trait-section">
        <div className="trait-pair judging-perceiving text">
          <div className="trait-heading">Judging vs Perceiving</div>
          <input
            className="input-field"
            type="number"
            value={judging}
            onChange={(e) =>
              validateInput(setJudging, perceiving, e.target.value)
            }
            placeholder="Judging"
          />
          <input
            className="input-field"
            type="number"
            value={perceiving}
            onChange={(e) =>
              validateInput(setPerceiving, judging, e.target.value)
            }
            placeholder="Perceiving"
          />
          </div>
        </div>
      </div>
      <button
        className="submit-button"
        onClick={handleProfileSubmit}
        disabled={!!error}
      >
        Submit
      </button>
    </div>
  );
}

export default UserProfile;
