
document.getElementById('mainAssessment').addEventListener('submit', function (e) {
    e.preventDefault();

    // คำนวณคะแนนจากแบบประเมินหลัก
    let totalScore = 0;
    for (let i = 1; i <= 5; i++) {
        totalScore += parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
    }

    if (totalScore > 8) {
        document.getElementById('mainAssessment').style.display = 'none';
        document.getElementById('additionalAssessment1').style.display = 'block';
    } else {
        showResult(totalScore);
    }
});

document.getElementById('additionalAssessment1').addEventListener('submit', function (e) {
    e.preventDefault();

    let extraAnswer1 = document.querySelector('input[name="extraQ1"]:checked').value;
    let extraAnswer2 = document.querySelector('input[name="extraQ2"]:checked').value;

    if (extraAnswer1 === 'yes' || extraAnswer2 === 'yes') {
        document.getElementById('additionalAssessment1').style.display = 'none';
        document.getElementById('additionalAssessment2').style.display = 'block';
    } else {
        showResult(0);  // คะแนนสมมติหากไม่มีเงื่อนไขเพิ่มเติม
    }
});

document.getElementById('additionalAssessment2').addEventListener('submit', function (e) {
    e.preventDefault();

    // คำนวณคะแนนจากแบบประเมินเพิ่มเติม 9 ข้อ
    let addTotalScore = 0;
    for (let i = 1; i <= 9; i++) {
        addTotalScore += parseInt(document.querySelector(`input[name="addQ${i}"]:checked`).value);
    }

    if (addTotalScore > 7) {
        document.getElementById('additionalAssessment2').style.display = 'none';
        document.getElementById('finalAssessment').style.display = 'block';
    } else {
        showResult(addTotalScore);
    }
});

document.getElementById('finalAssessment').addEventListener('submit', function (e) {
    e.preventDefault();

    // คำนวณคะแนนจากแบบประเมินขั้นสุดท้าย 8 ข้อ (ใช้ค่า 0 และ 1)
    let finalScore = 0;
    for (let i = 1; i <= 8; i++) {
        finalScore += parseInt(document.querySelector(`input[name="finalQ${i}"]:checked`).value);
    }

    showResult(finalScore); // เรียกใช้ฟังก์ชันเพื่อแสดงผล
});


function showResult(totalScore) {
    document.getElementById('mainAssessment').style.display = 'none';
    Swal.fire({
        icon: "success",
        // title: 'ผลลัพธ์ของคุณ',
        title: `คะแนนของคุณคือ ${totalScore}`,
        text: 'หากคุณมีความเครียดหรือความกังวลใจให้คุณกดใช้โปรแกรมภาษารักของเรา หากคุณ ต้องการความช่วยเหลืออย่างเร่งด่วน โทร 1323',
        
        showConfirmButton: true,
        confirmButtonText: 'HOME',
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html'; // เปลี่ยนเป็น URL ของหน้าแรกของคุณ
        }
      });


}
    // document.getElementById('resultPage').style.display = 'block';
    // document.getElementById('resultMessage').innerText = `คะแนนของคุณคือ ${totalScore}`;
// Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 1500
//   });

// function showResults(totalScore) {
//     Swal.fire({
//         title: 'ผลลัพธ์ของคุณ',
//         text: `คะแนนของคุณคือ ${totalScore}`,
//         icon: 'info',
//         confirmButtonText: 'กลับไปหน้าแรก',
//         confirmButtonColor: '#3085d6'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             window.location.href = 'index.html'; // เปลี่ยนเป็น URL ของหน้าแรกของคุณ
//         }
//     });
// }

// เรียกใช้ฟังก์ชันนี้หลังจากคำนวณคะแนนเสร็จ
// showResults(คะแนน);
