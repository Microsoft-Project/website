window.addEventListener("load", function () {
  const url = "https://label-predictor.herokuapp.com/api";
  // const url = "http://127.0.0.1:5000";
  const myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'
  });

  let fecthingData = false;

  const issueTitleField = document.getElementById("issue-title");
  const issueBodyField = document.getElementById("issue-body");
  const invalidIssueBody = document.getElementById("invalid-issue-body");
  const requestError = document.getElementById("request-error");
  const submitButton = document.getElementById("predictlabel");
  const progressSpinner = document.getElementById("progress-spinner");
  const predictedLabel = document.getElementById("predicted-label");
  const dataBeforePreProcessing = document.getElementById("data-before-preprocessing");
  const processedData = document.getElementById("data-after-preprocessing");

  submitButton.addEventListener("click", function () {
    let issueTitle = issueTitleField.value;
    let issueBody = issueBodyField.value;
    let requestData = {'title': issueTitle, 'body': issueBody};

    dataBeforePreProcessing.innerHTML = issueTitle + " " + issueBody;

    if (issueBody) {
      progressSpinner.classList.toggle('display-none');

      fetch(`${url}/prediction`, {
        method: "POST",
        body: JSON.stringify(requestData),
        mode: 'cors',
        headers: myHeaders
      })
        .then((res) => res.json())
        .then((data) => {
          fecthingData = true;

          if (fecthingData) {
            progressSpinner.classList.toggle('display-none');
            fecthingData = false;
          }

          let prediction = data.predictedLabel.trim();
          if (prediction === "bug") {
            predictedLabel.innerHTML = `🐞 ${prediction}`;
            predictedLabel.style.backgroundColor = "#F87171";
          } else if (prediction === "enhancement") {
            predictedLabel.innerHTML = `💡 ${prediction}`;
            predictedLabel.style.backgroundColor = "#a2eeef"
          } else if (prediction === "question") {
            predictedLabel.innerHTML = `❔ ${prediction}`;
            predictedLabel.style.backgroundColor = "#d876e3"
          }

          processedData.innerHTML = data.processedData;
        })
        .catch((error) => {
          console.log(error);
          requestError.classList.toggle("invisible");
        })
    }

    if (issueBody) {
      issueBodyField.classList.remove("border-red-500");
      invalidIssueBody.classList.add("display-none");
    } else {
      console.log('Issue body can not empty!');
      issueBodyField.classList.add("border-red-500");
      invalidIssueBody.classList.remove("display-none");
    }
  });
});