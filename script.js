document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form")

    const nameInput = document.querySelector("input[type='text']")
    const emailInput = document.querySelector("input[type='email']")
    const passwordInput = document.querySelector("input[type='password']")

    const message = document.getElementById("formMessage")

    form.addEventListener("submit", function (e) {

        e.preventDefault()

        let name = nameInput.value.trim()
        let email = emailInput.value.trim()
        let password = passwordInput.value.trim()

        if (name === "" || email === "" || password === "") {

            message.style.color = "red"
            message.textContent = "Please fill all required fields"

        }

        else {

            message.style.color = "green"
            message.textContent = "Form submitted successfully!"

        }

    })
    const dateInput = document.querySelector("input[type='date']")
    const numberInput = document.querySelector("input[type='number']")
    const rangeInput = document.querySelector("input[type='range']")
    const colorInput = document.querySelector("input[type='color']")
    const fileInput = document.querySelector("input[type='file']")
    const textarea = document.querySelector("textarea")
    const select = document.querySelector("select")

    const radios = document.querySelectorAll("input[type='radio']")
    const checkboxes = document.querySelectorAll("input[type='checkbox']")

    const progress = document.querySelector("progress")


    function createMessage(input) {

        let msg = document.createElement("small")
        msg.style.display = "block"
        msg.style.marginTop = "5px"
        input.parentNode.appendChild(msg)

        return msg

    }

    const nameMsg = createMessage(nameInput)
    const emailMsg = createMessage(emailInput)
    const passwordMsg = createMessage(passwordInput)
    const dateMsg = createMessage(dateInput)
    const numberMsg = createMessage(numberInput)
    const textareaMsg = createMessage(textarea)


    function showError(input, msgElement, message) {

        input.style.border = "2px solid red"
        msgElement.style.color = "red"
        msgElement.textContent = message

    }

    function showSuccess(input, msgElement, message) {

        input.style.border = "2px solid green"
        msgElement.style.color = "green"
        msgElement.textContent = message

    }

    nameInput.addEventListener("input", function () {

        let value = nameInput.value.trim()

        if (value.length < 3) {

            showError(nameInput, nameMsg, "Name must be at least 3 characters")

        } else {

            showSuccess(nameInput, nameMsg, "Valid name")

        }

    })


    emailInput.addEventListener("input", function () {

        let email = emailInput.value

        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (pattern.test(email)) {

            showSuccess(emailInput, emailMsg, "Valid email")

        } else {

            showError(emailInput, emailMsg, "Invalid email format")

        }

    })


    passwordInput.addEventListener("input", function () {

        let pass = passwordInput.value

        if (pass.length < 6) {

            showError(passwordInput, passwordMsg, "Weak password")

        } else if (pass.length < 10) {

            passwordInput.style.border = "2px solid orange"
            passwordMsg.style.color = "orange"
            passwordMsg.textContent = "Medium password"

        } else {

            showSuccess(passwordInput, passwordMsg, "Strong password")

        }

    })


    dateInput.addEventListener("change", function () {

        let selected = new Date(dateInput.value)
        let today = new Date()

        if (selected > today) {

            showError(dateInput, dateMsg, "Future date not allowed")

        } else {

            showSuccess(dateInput, dateMsg, "Valid date")

        }

    })


    numberInput.addEventListener("input", function () {

        let value = numberInput.value

        if (value < 1) {

            showError(numberInput, numberMsg, "Number must be greater than 0")

        } else {

            showSuccess(numberInput, numberMsg, "Valid number")

        }

    })


    textarea.addEventListener("input", function () {

        let length = textarea.value.length

        textareaMsg.style.color = "blue"
        textareaMsg.textContent = length + " characters typed"

    })


    function updateProgress() {

        let filled = 0

        if (nameInput.value) filled++
        if (emailInput.value) filled++
        if (passwordInput.value) filled++
        if (dateInput.value) filled++
        if (numberInput.value) filled++
        if (textarea.value) filled++

        progress.value = filled * 15

    }

    form.addEventListener("input", updateProgress)


    let rangeDisplay = document.createElement("span")
    rangeInput.parentNode.appendChild(rangeDisplay)

    rangeInput.addEventListener("input", function () {

        rangeDisplay.textContent = " Value: " + rangeInput.value

    })


    fileInput.addEventListener("change", function () {

        let file = fileInput.files[0]

        if (file) {

            if (file.size > 2000000) {

                alert("File too large (Max 2MB)")
                fileInput.value = ""

            }

        }

    })



    radios.forEach(radio => {

        radio.addEventListener("change", function () {

            alert("Gender selected: " + radio.nextSibling.textContent)

        })

    })


    checkboxes.forEach(box => {

        box.addEventListener("change", function () {

            let count = 0

            checkboxes.forEach(cb => {
                if (cb.checked) count++
            })

            console.log("Skills selected:", count)

        })

    })


    const rows = document.querySelectorAll("tbody tr")

    rows.forEach(row => {

        row.addEventListener("mouseenter", function () {

            row.style.background = "#f1f1f1"

        })

        row.addEventListener("mouseleave", function () {

            row.style.background = "white"

        })

    })


    let btn = document.createElement("button")
    btn.textContent = "Toggle Theme"
    document.body.prepend(btn)

    btn.addEventListener("click", function () {

        document.body.classList.toggle("dark")

        if (document.body.classList.contains("dark")) {

            document.body.style.background = "#111"
            document.body.style.color = "white"

        } else {

            document.body.style.background = "#f4f6f8"
            document.body.style.color = "#333"

        }

    })


    let clock = document.createElement("h3")
    document.body.prepend(clock)

    setInterval(function () {

        let now = new Date()

        clock.textContent = now.toLocaleTimeString()

    }, 1000)

    form.addEventListener("reset", function () {

        message.textContent = ""
        nameMsg.textContent = ""
        emailMsg.textContent = ""
        passwordMsg.textContent = ""
        nameInput.style.border = ""
        emailInput.style.border = ""
        passwordInput.style.border = ""

    })


})