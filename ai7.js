function toggleButtons(className) {
    console.log("Handling buttons for class:", className); // เพิ่ม log เพื่อตรวจสอบ
    const actionButtons = document.querySelectorAll('#actionButtons button');
    const infoButtons = document.querySelectorAll('#infoButtons button');

    // ตรวจสอบว่า.className ตรงกับ D4, D2, D3 หรือ D11
    if (['D4', 'D2', 'D3',].includes(className)) {
        actionButtons.forEach(button => button.style.display = 'none');
        infoButtons.forEach(button => button.style.display = 'block');
    } else {
        actionButtons.forEach(button => button.style.display = 'block');
        infoButtons.forEach(button => button.style.display = 'none');
    }
}
// ปุ่ม "สาเหตุ" และ "วิธีรักษา"
// Event listener for causeButton
// Event listener for causeButton
causeButton.addEventListener('click', () => {
    const resultText = resultDisplayElement.querySelector('h3, p')?.textContent.trim() || '';
    let url = 'bad.html'; // ค่าเริ่มต้น

    if (resultText.includes('จุดราขาว')) {
        url = 'bad11.html';
    } else if (resultText.includes('สนิม')) {
        url = 'bad3.html';
    } else if (resultText.includes('ใบไหม้')) {
        url = 'bad4.html';
    } else if (resultText.includes('ราขาว')) {
        url = 'bad2.html';
    }

    const diseaseName = resultText.replace(/[🚨✅]/g, '').trim();
    window.location.href = `${url}?disease=${encodeURIComponent(diseaseName)}`;
});

// Event listener for treatmentButton
treatmentButton.addEventListener('click', () => {
    const resultText = resultDisplayElement.querySelector('h3, p')?.textContent.trim() || '';
    let url = 'health.html'; // ค่าเริ่มต้น

    if (resultText.includes('จุดราขาว')) {
        url = 'health2.html';
    } else if (resultText.includes('สนิม')) {
        url = 'health3.html';
    } else if (resultText.includes('ใบไหม้')) {
        url = 'health.html';
    } else if (resultText.includes('ราขาว')) {
        url = 'health4.html';
    }

    const diseaseName = resultText.replace(/[🚨✅]/g, '').trim();
    window.location.href = `${url}?disease=${encodeURIComponent(diseaseName)}`;
});

function handleClassificationResult(label) {
    const infoContainer = document.getElementById("infoContainer");
    const resultMessage = document.getElementById("resultMessage");

    // รายชื่อโรคที่จะแสดงปุ่ม
   const showButtonsFor = ["D2", "D3", "D4", "D11"];

    if (showButtonsFor.includes(label)) {
        // ตั้งชื่อโรคให้ตรงตาม label
        let name = "";
        switch (label) {
            case "D2":
                name = "โรคจุดราขาว";
                break;
            case "D3":
                name = "โรคใบสนิม";
                break;
            case "D4":
                name = "โรคใบไหม้";
                break;
    
        }



        function handleFinalResult(className) {
    let resultText = {
        'D1': '✅ ปลอดเชื้อโรค ✅',
        'D2': '🚨 เป็นโรคจุดราขาว 🚨',
        'D3': '🚨 เป็นโรคสนิม 🚨',
        'D4': '🚨 เป็นโรคใบไหม้ 🚨',
        'D5': '🚨 กรุณาถ่ายใหม่ 🚨',
        'D6': '🚨 เอ๊ะ ยังไม่สุกน่ะ 🚨',
        'D7': '🕐 รอต่อสัก 2-3 วัน 🕐',
        'D8': '✅ พร้อมทานรสชาติหวาน ✅'

        
    }[className] || `💡 ตรวจพบ: ${className}`;



    https://teachablemachine.withgoogle.com/models/l_zvMSkA3/

      document.getElementById("infoButtons").style.display = shouldShowInfoButtons ? 'flex' : 'none';