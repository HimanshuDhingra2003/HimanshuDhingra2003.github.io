 document.addEventListener("DOMContentLoaded", function () {
            const sendBtn = document.getElementById("sendBtn");
            const messageBox = document.querySelector(".message-box");
            const messageBar = document.querySelector(".message-bar-input");
            const API_URL = "https://api.openai.com/v1/chat/completions";
            let API_KEY = "";

            async function getAPIKey() {
                while (!API_KEY) {
                    API_KEY = prompt("Please enter your OpenAI API key: ");
                    if (!API_KEY) {
                        alert("API Key is required. Please enter your API Key.");
                    }
                }
            }

            
            getAPIKey();

sendBtn.onclick = async function () {
                if (messageBar.value.length > 0) {
                    let message = `<div class="chat">
                        <img src="user.jpg" alt="none">
                        <span>${messageBar.value}</span>
                    </div>`;

                    messageBox.insertAdjacentHTML("beforeend", message);

                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${API_KEY}`
                        },
                        body: JSON.stringify({
                            "model": "gpt-3.5-turbo",
                            "messages": [
                                {
                                    "role": "system",
                                    "content": "You are a helpful assistant."
                                },
                                {
                                    "role": "user",
                                    "content": messageBar.value
                                }
                            ]
                        })
                    };
  try {
                        const res = await fetch(API_URL, requestOptions);

                        if (res.status == 429) {
                            console.log(res);
                            throw new Error("Rate limit exceeded");
                        }

                        const data = await res.json();

                        if (data.choices && data.choices.length > 0) {
                            let response = `<div class="chat response">
                                <img src="logo.jpg">
                                <span>${data.choices[0].message.content}</span>
                            </div>`;
                            messageBox.insertAdjacentHTML("beforeend", response);
                        } else {
                            let errorMessage = `<div class="chat response">
                                <img src="logo.jpg">
                                <span>An error occurred while processing your request.</span>
                            </div>`;
                            messageBox.insertAdjacentHTML("beforeend", errorMessage);
                        }
                    } catch (error) {
                        let errorMessage = `<div class="chat response">
                            <img src="logo.jpg">
                            <span>${error.message}</span>
                        </div>`;
                        messageBox.insertAdjacentHTML("beforeend", errorMessage);
                    }

                    messageBar.value = "";
                }
            };
        });
