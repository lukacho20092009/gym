const exerciseDB = [

    { name: "Burpees", reps: "3 x 15", goal: "დაკლება", loc: "სახლი", gen: "both", icon: "💥", desc: "ნახტომი, ჩაჯდომა, აზიდვა. სხეულის სრული დატვირთვა.", calPerRep: 1.4 },
    { name: "Jumping Jacks", reps: "4 x 1 წუთი", goal: "დაკლება", loc: "სახლი", gen: "both", icon: "🏃", desc: "ინტენსიური ხტომები ხელ-ფეხის გაშლით.", calPerRep: 10 },
    { name: "Mountain Climbers", reps: "3 x 45 წამი", goal: "დაკლება", loc: "სახლი", gen: "both", icon: "⛰️", desc: "მთამსვლელის იმიტაცია პლანკაში. მუცლის პრესისთვის.", calPerRep: 12 },
    { name: "High Knees", reps: "3 x 1 წუთი", goal: "დაკლება", loc: "სახლი", gen: "both", icon: "🦵", desc: "ადგილზე სირბილი მუხლების მაღალი აწევით.", calPerRep: 14 },
    { name: "Jump Rope", reps: "5 x 2 წუთი", goal: "დაკლება", loc: "both", gen: "both", icon: "➰", desc: "თოკზე ხტომა. საუკეთესოა კალორიების წვისთვის.", calPerRep: 15 },
    { name: "Shadow Boxing", reps: "3 x 3 წუთი", goal: "დაკლება", loc: "სახლი", gen: "both", icon: "🥊", desc: "ჩრდილთან კრივი. აუმჯობესებს კოორდინაციას.", calPerRep: 9 },

    { name: "Bench Press", reps: "4 x 10", goal: "მომატება", loc: "დარბაზი", gen: "male", icon: "🏋️‍♂️", desc: "წოლჟიმი. მკერდის კუნთების მთავარი ვარჯიში.", calPerRep: 0.5 },
    { name: "Deadlift", reps: "3 x 8", goal: "მომატება", loc: "დარბაზი", gen: "male", icon: "🏗️", desc: "ამოწევა. ზურგის და ფეხების ძალისთვის.", calPerRep: 0.8 },
    { name: "Squats with Barbell", reps: "4 x 12", goal: "მომატება", loc: "დარბაზი", gen: "both", icon: "🍑", desc: "ჩაჯდომები შტანგით. დუნდულების და ფეხების ზრდა.", calPerRep: 0.7 },
    { name: "Shoulder Press", reps: "3 x 12", goal: "მომატება", loc: "დარბაზი", gen: "both", icon: "💪", desc: "განტელების აწევა მხრებიდან.", calPerRep: 0.4 },
    { name: "Bicep Curls", reps: "3 x 15", goal: "მომატება", loc: "დარბაზი", gen: "male", icon: "🦾", desc: "ბიცეფსის ვარჯიში განტელებით.", calPerRep: 0.3 },
    { name: "Leg Press", reps: "4 x 10", goal: "მომატება", loc: "დარბაზი", gen: "both", icon: "🚜", desc: "ფეხების პრესი ტრენაჟორზე.", calPerRep: 0.6 },

    { name: "Treadmill Run", reps: "20 წუთი", goal: "დაკლება", loc: "დარბაზი", gen: "both", icon: "🏃‍♂️", desc: "სირბილი ბილიკზე. გამძლეობისთვის.", calPerRep: 11 },
    { name: "Stair Climber", reps: "15 წუთი", goal: "დაკლება", loc: "დარბაზი", gen: "both", icon: "🪜", desc: "კიბის იმიტაცია. დუნდულების საუკეთესო ფორმისთვის.", calPerRep: 12 },
    { name: "Elliptical", reps: "20 წუთი", goal: "დაკლება", loc: "დარბაზი", gen: "female", icon: "🎿", desc: "დაბალი დარტყმის კარდიო სახსრებისთვის.", calPerRep: 9 },
    { name: "Rowing Machine", reps: "10 წუთი", goal: "both", loc: "დარბაზი", gen: "both", icon: "🚣", desc: "ნიჩბოსნობის სიმულაცია. მთელი სხეული მუშაობს.", calPerRep: 13 },

    { name: "Push Ups", reps: "4 x 15", goal: "both", loc: "სახლი", gen: "both", icon: "👕", desc: "აზიდვები. გულმკერდისა და ტრიცეფსისთვის.", calPerRep: 0.6 },
    { name: "Bulgarian Split Squats", reps: "3 x 12", goal: "მომატება", loc: "სახლი", gen: "female", icon: "🦵", desc: "ცალ ფეხზე ჩაჯდომა სკამის გამოყენებით.", calPerRep: 0.7 },
    { name: "Plank Reach", reps: "3 x 1 წუთი", goal: "both", loc: "სახლი", gen: "both", icon: "🧘", desc: "პლანკა ხელის გაწვდენით. პრესის სტაბილურობა.", calPerRep: 5 },
    { name: "Dips", reps: "3 x 12", goal: "მომატება", loc: "both", gen: "both", icon: "🪑", desc: "აზიდვები სკამზე ტრიცეფსისთვის.", calPerRep: 0.5 },

    { name: "Swimming", reps: "30 წუთი", goal: "both", loc: "დარბაზი", gen: "both", icon: "🏊", desc: "ცურვა. იდეალურია რეკოვერისთვის და წვისთვის.", calPerRep: 12 },
    { name: "Cycling", reps: "30 წუთი", goal: "both", loc: "both", gen: "both", icon: "🚲", desc: "ველოსიპედით სეირნობა.", calPerRep: 8 }
];

let currentStep = 1;
let unitSystem = 'metric'; 
let userData = { gender: '', height: 0, weight: 0, goal: '', location: '', targetWeight: 0, months: 1, baseCals: 0 };

function nextStep(s) { 
    currentStep = s; 
    updateUI(); 
}

function prevStep() { 
    if(currentStep > 1) { 
        currentStep--; 
        updateUI(); 
    } 
}

function goToStep(s) { 
    if(s < currentStep) { 
        currentStep = s; 
        updateUI(); 
    } 
}

function setGender(g) { 
    userData.gender = g; 
    nextStep(2); 
}

function switchUnit(system) {
    if (unitSystem === system) return;
    const hInput = document.getElementById('height');
    const wInput = document.getElementById('weight');
    let hVal = parseFloat(hInput.value);
    let wVal = parseFloat(wInput.value);

    if (system === 'imperial') {
        if (hVal) hInput.value = (hVal / 30.48).toFixed(2);
        if (wVal) wInput.value = (wVal * 2.20462).toFixed(1);
        document.getElementById('heightLabel').innerText = "სიმაღლე (FT)";
        document.getElementById('weightLabel').innerText = "წონა (LB)";
    } else {
        if (hVal) hInput.value = Math.round(hVal * 30.48);
        if (wVal) wInput.value = Math.round(wVal / 2.20462);
        document.getElementById('heightLabel').innerText = "სიმაღლე (სმ)";
        document.getElementById('weightLabel').innerText = "წონა (კგ)";
    }
    unitSystem = system;
    document.getElementById('mUnit').classList.toggle('active');
    document.getElementById('iUnit').classList.toggle('active');
}

function calculateBMI() {
    const hInput = document.getElementById('height');
    const wInput = document.getElementById('weight');
    const errorDiv = document.getElementById('error-msg');
    
    let h = hInput.value === "" ? parseFloat(hInput.placeholder) : parseFloat(hInput.value);
    let w = wInput.value === "" ? parseFloat(wInput.placeholder) : parseFloat(wInput.value);

    let mH = unitSystem === 'metric' ? h : h * 30.48;
    let mW = unitSystem === 'metric' ? w : w / 2.20462;

    if (mH < 100 || mH > 250 || mW < 40 || mW > 250) {
        if (errorDiv) {
            errorDiv.innerText = "მონაცემები არარეალურია!";
            errorDiv.classList.remove('hidden');
        }
        hInput.parentElement.style.borderColor = "#ef4444"; 
        wInput.parentElement.style.borderColor = "#ef4444";
        return; 
    }

    if (errorDiv) errorDiv.classList.add('hidden');
    hInput.parentElement.style.borderColor = ""; 
    wInput.parentElement.style.borderColor = "";

    userData.height = mH; 
    userData.weight = mW;

    let bmi = (mW / ((mH / 100) ** 2)).toFixed(1);
    let bmr = (10 * mW) + (6.25 * mH) - (5 * 25) + (userData.gender === 'male' ? 5 : -161);
    userData.baseCals = Math.round(bmr * 1.2);

    document.getElementById('bmiStatus').innerText = bmi < 18.5 ? "ნაკლებობა" : bmi <= 25 ? "ნორმა" : "ჭარბი წონა";
    document.getElementById('dailyCals').innerText = userData.baseCals + " კკალ";

    nextStep(3);

    setTimeout(() => {
        let rot = Math.max(-90, Math.min(90, (bmi - 22) * 10));
        let needle = document.getElementById('needle');
        if(needle) needle.style.transform = `rotate(${rot}deg)`;
    }, 100);
}

function setGoal(goal) {
    userData.goal = goal; 
    const targetTitle = document.getElementById('targetTitle');
    if (targetTitle) {
        targetTitle.innerText = goal === 'დაკლება' ? "რამდენის დაკლება გსურს?" : "რამდენის მომატება გსურს?";
    }
    if (goal === 'დაკლება' || goal === 'მომატება') {
        nextStep(5);
    } else {
        nextStep(6);
    }

const bmiAdvice = {
    underweight: "თქვენი მაჩვენებელი მიუთითებს წონის დეფიციტზე. ჩვენი გეგმა ფოკუსირებული იქნება კუნთოვანი მასის ჯანსაღ მატებაზე.",
    normal: "თქვენ იდეალურ ფორმაში ხართ! გეგმა დაგეხმარებათ ტონუსის შენარჩუნებასა და სხეულის რელიეფის გამოკვეთაში.",
    overweight: "თქვენი მაჩვენებელი ნორმას ოდნავ აღემატება. ოპტიმალური კვებითა და კარდიოთი შედეგს სწრაფად მივაღწევთ.",
    obese: "ჯანმრთელობა პრიორიტეტია. ჩვენი პროგრამა მაქსიმალურად უსაფრთხოდ და ეფექტურად დაგეხმარებათ წონის კლებაში."
};

let statusKey = bmi < 18.5 ? 'underweight' : bmi <= 25 ? 'normal' : bmi <= 30 ? 'overweight' : 'obese';
document.getElementById('bmiDescription').innerText = bmiAdvice[statusKey];

}

function setIntens(level) {
    userData.intensity = level;
    document.querySelectorAll('.intens-btn').forEach(b => b.classList.remove('bg-white', 'shadow-sm'));
    document.getElementById('intens-' + level).classList.add('bg-white', 'shadow-sm');
}

function regenerateWorkout() {
    const icon = document.getElementById('shuffle-icon');
    icon.style.transform = 'rotate(360deg)';
    
    const list = document.getElementById('workout-items');
    list.style.opacity = '0.3';
    list.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        showFinalWorkout();
        
        list.style.opacity = '1';
        list.style.transform = 'scale(1)';
        icon.style.transform = 'rotate(0deg)';
        
        if (window.navigator.vibrate) window.navigator.vibrate(50);
    }, 400);
}


function calculateRealTime() {
    let target = parseFloat(document.getElementById('targetWeight').value);
    let current = userData.weight;
    let goal = userData.goal; 
    let infoBox = document.getElementById('realTimeBox');
    let timeText = document.getElementById('suggestedTime');
    let btn = document.getElementById('confirmTargetBtn');

    if (!target || isNaN(target)) {
        if (infoBox) infoBox.classList.add('hidden');
        if (btn) btn.disabled = true;
        return;
    }

    if (infoBox) infoBox.classList.remove('hidden');

    if (target === current) {
        timeText.innerText = `შენ უკვე ${current} კილო ხარ. აირჩიე სხვა მიზანი.`;
        btn.disabled = true;
        btn.classList.add('opacity-50');
        return;
    }

    let isInvalid = false;
    if (goal === 'დაკლება' && target > current) {
        timeText.innerText = `მიზანია დაკლება, მაგრამ შეიყვანეთ მეტი წონა (${target} კგ).`;
        isInvalid = true;
    } else if (goal === 'მომატება' && target < current) {
        timeText.innerText = `მიზანია მომატება, მაგრამ შეიყვანეთ ნაკლები წონა (${target} კგ).`;
        isInvalid = true;
    }

    if (isInvalid) {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        return;
    }

    let diff = Math.abs(current - target);
    let totalWeeks = diff / 0.7;
    let months = Math.floor(totalWeeks / 4);
    let weeks = Math.ceil(totalWeeks % 4);

    let resultText = "ამ შედეგისთვის დაგჭირდებათ დაახლოებით ";
    if (months > 0) {
        resultText += `${months} თვე${weeks > 0 ? ' და ' + weeks + ' კვირა' : ''}`;
    } else {
        resultText += `${weeks} კვირა`;
    }

    timeText.innerText = resultText;
    btn.disabled = false;
    btn.classList.remove('opacity-50', 'cursor-not-allowed');

    userData.targetWeight = target;
    userData.months = months > 0 ? months : 1;
}

function increment(id) {
    const input = document.getElementById(id);
    const baseValue = input.value === "" ? parseFloat(input.placeholder) : parseFloat(input.value);
    input.value = baseValue + 1;
    if(id === 'targetWeight') calculateRealTime();
}

function decrement(id) {
    const input = document.getElementById(id);
    const baseValue = input.value === "" ? parseFloat(input.placeholder) : parseFloat(input.value);
    if (baseValue > 0) input.value = baseValue - 1;
    if(id === 'targetWeight') calculateRealTime();
}

function setChoice(type, val, next) {
    userData[type] = val;
    
    if(type === 'location') {

        const resGoal = document.getElementById('resGoal');
        const resLoc = document.getElementById('resLoc');
        const resWeightInfo = document.getElementById('resWeightInfo');

        if(resGoal) resGoal.innerText = userData.goal;
        if(resLoc) resLoc.innerText = userData.location;
        
        if(resWeightInfo) {
            if(userData.targetWeight && (userData.goal === 'დაკლება' || userData.goal === 'მომატება')) {
                let diff = Math.round(Math.abs(userData.weight - userData.targetWeight));
                resWeightInfo.innerText = `${userData.goal === 'მომატება' ? '+' : '-'} ${diff} კგ / ${userData.months} თვეში`;
            } else {
                resWeightInfo.innerText = "შენარჩუნება";
            }
        }

        if(typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }

        startPlanGeneration(); 
    } else {
        nextStep(next);
    }
}


function openModal(name) {
    const ex = exerciseDB.find(e => e.name === name);
    if(!ex) return;
    document.getElementById('modalTitle').innerText = ex.name;
    document.getElementById('modalReps').innerText = ex.reps;
    document.getElementById('modalDesc').innerText = ex.desc;
    document.getElementById('modalIcon').innerText = ex.icon;
    document.getElementById('exerciseModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('exerciseModal').style.display = 'none';
}

function calculateExerciseCalories(ex) {
    let totalBurned = 0;
    const repsStr = ex.reps.toLowerCase();
    
    if (repsStr.includes('წუთი') || repsStr.includes('წამი')) {
        let duration = parseInt(repsStr);
        if (repsStr.includes('x')) {
            let parts = repsStr.split('x');
            duration = parseInt(parts[0]) * parseInt(parts[1]);
        }
        totalBurned = duration * ex.calPerRep;
    } else if (repsStr.includes('x')) {
        let parts = repsStr.split('x');
        let totalReps = parseInt(parts[0]) * parseInt(parts[1]);
        totalBurned = totalReps * ex.calPerRep;
    } 
    return Math.round(totalBurned);
}

function showFinalWorkout() {
    const listContainer = document.getElementById('workout-items');
    listContainer.innerHTML = '';

    const filtered = exerciseDB.filter(ex => 
        (ex.loc === userData.location || ex.loc === 'both') && 
        (ex.goal === userData.goal || ex.goal === 'both' || userData.goal === 'კარდიო' || userData.goal === 'ძალა') &&
        (ex.gen === userData.gender || ex.gen === 'both')
    );

    let totalWorkoutCalories = 0;
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const finalExercises = shuffled.slice(0, 7);

    finalExercises.forEach(ex => {
        let burned = calculateExerciseCalories(ex);
        totalWorkoutCalories += burned;

        listContainer.innerHTML += `
            <div onclick="openModal('${ex.name}')" class="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm cursor-pointer hover:border-blue-300 transition-all active:scale-95 mb-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl">${ex.icon}</div>
                    <div>
                        <p class="font-black text-slate-800 text-sm">${ex.name}</p>
                        <p class="text-[10px] text-blue-600 font-bold uppercase">${ex.reps} • <span class="text-orange-500">${burned} კკალ</span></p>
                    </div>
                </div>
                <div class="text-slate-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </div>
            </div>
        `;
    });

    const subTitle = document.getElementById('workoutSubTitle');
    if(subTitle) {
        subTitle.innerHTML = `${userData.location} | ${userData.goal} <br> <span class="text-orange-600 font-black">ჯამში დაიწვება: 🔥 ${totalWorkoutCalories} კკალ</span>`;
    }

    nextStep(8);
}

function nextStep(s) { 
    currentStep = s; 
    updateUI(); 
}

function updateUI() {
    document.querySelectorAll('.step').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none';
    });

    const targetId = 'step' + currentStep;
    const currentStepEl = document.getElementById(targetId);

    if(currentStepEl) {
        currentStepEl.classList.add('active');
        currentStepEl.style.display = 'flex';
    }

    const backBtn = document.getElementById('backBtn');
    if(backBtn) {
        backBtn.style.display = (currentStep !== 1 && currentStep !== '-loading' && currentStep < 8) ? 'block' : 'none';
    }
    
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx + 1 === currentStep);
    });
}


function downloadPDF() {
    const pdfContainer = document.getElementById('pdf-exercises');
    const statsContainer = document.getElementById('pdf-stats');
    statsContainer.innerHTML = `
        <div><strong>BMI:</strong> ${document.getElementById('bmiStatus').innerText}</div>
        <div><strong>დღიური კალორია:</strong> ${userData.baseCals} კკალ</div>
        <div><strong>მიზანი:</strong> ${userData.goal}</div>
    `;

    pdfContainer.innerHTML = ''; 
    
    const workoutItems = document.querySelectorAll('#workout-items > div');
    
    workoutItems.forEach(item => {
        const name = item.querySelector('.font-black').innerText;
        const exData = exerciseDB.find(e => e.name === name);
        
        pdfContainer.innerHTML += `
            <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #f1f5f9; border-radius: 10px; page-break-inside: avoid;">
                <h3 style="margin: 0; color: #1e293b;">${exData.icon} ${exData.name}</h3>
                <p style="margin: 5px 0; color: #3b82f6; font-weight: bold; font-size: 14px;">${exData.reps}</p>
                <p style="margin: 5px 0; color: #475569; font-size: 13px; line-height: 1.5;">${exData.desc}</p>
            </div>
        `;
    });

    const element = document.getElementById('pdf-template');
    const opt = {
        margin: [10, 10, 10, 10], 
        filename: 'Shushtaka_Plan_Pro.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    element.parentElement.style.display = 'block';
    
    html2pdf().set(opt).from(element).save().then(() => {
        element.parentElement.style.display = 'none'; 
    });
}

function startPlanGeneration() {
    nextStep('-loading'); 
    
    const messages = [
        { text: "მონაცემების ანალიზი...", sub: "ვადგენთ თქვენს BMI ინდექსს" },
        { text: "ალგორითმის მორგება...", sub: "ვარჩევთ ოპტიმალურ ვარჯიშებს" },
        { text: "კალორიების დათვლა...", sub: "ვადგენთ დღიურ დეფიციტს" },
        { text: "გეგმა მზადდება...", sub: "თითქმის დავასრულეთ" }
    ];

    let progress = 0;
    let messageIndex = 0;
    const bar = document.getElementById('loading-bar');
    const text = document.getElementById('loading-text');
    const subtext = document.getElementById('loading-subtext');

    if(bar) bar.style.width = "0%";

    const interval = setInterval(() => {
        progress += Math.random() * 8; 
        if (progress > 100) progress = 100;
        
        if(bar) bar.style.width = progress + "%";

        if (progress > (messageIndex + 1) * 25 && messageIndex < messages.length - 1) {
            messageIndex++;
            if(text) text.innerText = messages[messageIndex].text;
            if(subtext) subtext.innerText = messages[messageIndex].sub;
        }

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                nextStep(7);
            }, 600);
        }
    }, 200);
}

