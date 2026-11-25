// ============================================================================
//  MEDICINE GUIDE — benefits, side effects, what happens if missed/stopped
//  Every point comes from an official leaflet (NHS / MedlinePlus / FDA label)
//  or a pharmacy listing (for brand contents), fetched and re-checked 15 Nov 2026. "cmc" = what CMC's discharge summary (5 Jun 2026) says.
//  If a leaflet does not cover something, we say so instead of guessing.
// ============================================================================

window.MEDGUIDE = {
  checked: "2026-11-24",

  // Big-picture points, each taken from the leaflets below
  keyPoints: [
    {"tone":"bad","text":"<b>Never stop suddenly:</b> duloxetine, pregabalin and clonazepam (Pandura), and sertraline if she still takes it. The NHS and MedlinePlus leaflets say stopping suddenly can cause withdrawal symptoms; the doctor reduces the dose gradually."},
    {"tone":"bad","text":"<b>Naproxen course (Napro-A Plus, new 12 Nov):</b> the US naproxen label warns of a higher risk of heart attack and stroke. It says naproxen can interfere with low-dose aspirin, and that NSAIDs combined with BP tablets like olmesartan can harm the kidneys in older people. Ask the doctor about it; see 'For the doctor'."},
    {"tone":"warn","text":"<b>Four drowsy medicines:</b> pregabalin, duloxetine, quetiapine and clonazepam all act on the brain. US guidance for older adults (AGS Beers Criteria 2023) advises avoiding 3 or more together, and avoiding benzodiazepines such as clonazepam, because of falls and fractures. With her spine osteoporosis, a fall matters more."},
    {"tone":"warn","text":"<b>Keep taking unless a doctor says stop:</b> aspirin and the statin (rosuvastatin since 12 Nov, replacing atorvastatin). Don't take the old and the new statin together."},
    {"tone":"warn","text":"<b>Pregabalin:</b> it is now Lyrinex CR 82.5, written morning and night. The US label for pregabalin CR says once daily after the evening meal. The NHS says pregabalin 'might not be suitable for people older than 65'. Ask her doctor (don't stop it suddenly)."},
    {"tone":"warn","text":"<b>Kidneys:</b> naproxen, olmesartan (in Bizoran) and pregabalin all need care when kidney function is reduced. Her creatinine rose from 0.7 to 1.0, and a new creatinine test was ordered on 12 Nov."},
    {"tone":"warn","text":"<b>Two acid reducers:</b> Rabe 20 (rabeprazole) plus the esomeprazole inside Napro-A Plus. The Rabe leaflet says these medicines 'may modestly increase the risk of hip, wrist and spine fracture'. Ask if both are needed."},
    {"tone":"info","text":"<b>Constipation:</b> quetiapine, duloxetine, pregabalin and calcium can all cause constipation (NHS / MedlinePlus / labels). Ezylife is meant for occasional use."}
  ],

  meds: [
    {
      name: "Aspirin", strength: "75 mg once daily (noon on the 12 Nov list: Ecosprin 75)", group: "Stroke prevention",
      cmc: "On the discharge list; the summary says she was 'managed with antiplatelet therapy' (aspirin is an antiplatelet).",
      benefits: ["Prevents blood clots and lowers the chance of a heart attack or stroke (NHS).", "Usually taken for a long time, sometimes for life (NHS)."],
      common: ["Indigestion and stomach ache", "Bleeding more easily than usual (for example, cuts take longer to stop bleeding)"],
      serious: ["Signs of stomach bleeding: tummy pain, pale skin, vomiting blood, or black, sticky, tar-like poo", "Shortness of breath or wheezing", "Allergic reaction: swollen throat or tongue, itchy raised rash, difficulty breathing (call an ambulance)"],
      missed: "Take it as soon as you remember, unless it's nearly time for the next dose; then skip it. Never take 2 doses to make up (NHS).",
      ifStopped: "NHS: 'keep taking your medicine unless you're advised to stop.' The leaflet does not put a number on the risk of stopping. CMC prescribed it to lower the chance of another stroke.",
      watch: ["NHS lists 'some antidepressants' and painkillers like ibuprofen and naproxen as medicines that may not mix well. The NHS says paracetamol can be taken at the same time if needed.", "Limit alcohol (NHS).", "The NHS says it may not be suitable with a liver or kidney condition."],
      sources: [["NHS: low-dose aspirin", "https://www.nhs.uk/medicines/low-dose-aspirin/"]]
    },
    {
      name: "Atorvastatin", strength: "10 mg once daily, night", status: "Replaced 12 Nov", update: "On 12 Nov Dr Rajib Das switched the statin to <b>Rosu 10 (rosuvastatin)</b>. See its card. Don't take both.", group: "Stroke prevention",
      cmc: "On the discharge list; the summary says she was managed with 'statins'. (Her LDL cholesterol was 162 in Dhaka in April; CMC didn't link the two in writing.)",
      benefits: ["Lowers cholesterol (NHS).", "Can prevent angina, heart attack and stroke in people with heart or blood-vessel disease (NHS).", "Usually taken long term (NHS)."],
      common: ["Headache", "Dizziness", "Feeling sick", "Constipation, diarrhoea, indigestion or wind", "Muscle aches and swollen joints", "Blocked or runny nose, nosebleeds", "Sleep problems"],
      serious: ["Muscle cramps, severe pain or weakness, sometimes with a high temperature and red or brown pee", "Yellow skin or whites of the eyes (liver problem)", "Severe stomach pain (pancreatitis)", "Allergic reaction"],
      missed: "Skip the missed dose and take the next one at the usual time. Never take 2 doses (NHS).",
      ifStopped: "NHS: 'If you stop taking it, your cholesterol levels may go up again.'",
      watch: ["No more than 1 or 2 small glasses of grapefruit juice a day; limit alcohol, as it can raise the risk of liver side effects (NHS).", "St John's wort may not mix well (NHS).", "Tell the doctor about any antibiotics such as clarithromycin or erythromycin, or antifungals such as fluconazole; the NHS says these may not mix well.", "The NHS leaflet says it may not be suitable if you've had 'a bleed in the brain', or have liver or kidney problems. Her stroke was ischaemic (a blocked artery), according to CMC, but confirm with the doctor if unsure."],
      sources: [["NHS: atorvastatin", "https://www.nhs.uk/medicines/atorvastatin/"]]
    },
    {
      name: "Sertraline", strength: "25 mg once daily, morning", status: "Not on 12 Nov list", update: "Sertraline is not on the 12 Nov prescription or on the family's list. Confirm it was stopped on purpose, and gradually.", group: "Mind & pain",
      cmc: "Started by CMC Psychiatry for anxiety symptoms linked to stress.",
      benefits: ["An SSRI antidepressant used for depression, OCD, panic disorder, PTSD and social anxiety (NHS)."],
      common: ["Headaches", "Feeling or being sick", "Dizziness or drowsiness", "Dry mouth", "Diarrhoea", "Sleep problems", "Sexual problems", "Weight gain", "Most ease after a couple of weeks (NHS)"],
      serious: ["Serotonin syndrome: fast heartbeat, sweating, shaking, twitching muscles, confusion or agitation", "Unusually high mood or energy, risky behaviour (mania)", "Very low mood or thoughts of self-harm (urgent help)", "Allergic reaction (call an ambulance)"],
      missed: "Skip it and take the next dose the next day as usual. Never take 2 doses (NHS).",
      ifStopped: "NHS: do not stop suddenly, because it may cause withdrawal symptoms. The dose is reduced gradually over several weeks or months.",
      watch: ["NHS lists 'some types of' NSAIDs, 'such as aspirin and ibuprofen', as medicines that may not mix well; she takes aspirin.", "The NHS leaflet doesn't cover taking it together with duloxetine. This is on the 'For the doctor' list.", "Avoid alcohol, St John's wort and grapefruit juice (NHS).", "Taking an extra dose can be dangerous; call a doctor or pharmacist for advice (NHS).", "Sexual side effects may continue after stopping (NHS)."],
      sources: [["NHS: sertraline", "https://www.nhs.uk/medicines/sertraline/"]]
    },
    {
      name: "Duloxetine", strength: "20 mg once daily", status: "Now 30 mg", update: "Since 12 Nov: <b>Diliner DR 30</b> (duloxetine 30 mg) at noon. The Diliner leaflet notes a bleeding risk with NSAIDs and aspirin.", group: "Mind & pain",
      cmc: "On the discharge list; the summary doesn't say why.",
      benefits: ["An SNRI antidepressant used for depression and anxiety, and for nerve pain such as fibromyalgia (NHS).", "For nerve pain it 'reduces the pain messages nerves send to your brain' (NHS)."],
      common: ["Headaches", "Feeling or being sick", "Dizziness or drowsiness", "Dry mouth", "Diarrhoea or constipation", "Insomnia", "Sexual problems", "Weight loss", "Most ease after a couple of weeks (NHS)"],
      serious: ["Serotonin syndrome: fast heartbeat, sweating, shaking, twitching muscles, confusion or agitation", "Unexplained muscle pain or weakness", "Mania", "Very low mood or thoughts of self-harm (urgent help)", "Allergic reaction"],
      missed: "Take it as soon as you remember, unless it's nearly time for the next dose; then skip it. Never take 2 doses (NHS).",
      ifStopped: "NHS: do not stop suddenly, because it may cause withdrawal symptoms. The dose is reduced gradually over several weeks or months.",
      watch: ["NHS lists 'some types of' NSAIDs such as aspirin, and antiplatelet medicines, as medicines that may not mix well.", "Combination with sertraline isn't covered by the leaflet; ask the doctor.", "Best not to drink alcohol; don't take St John's wort (NHS).", "Taking an extra dose can be dangerous; call a doctor or pharmacist for advice (NHS)."],
      sources: [["NHS: duloxetine", "https://www.nhs.uk/medicines/duloxetine/"]]
    },
    {
      name: "Pregabalin", strength: "75 mg twice daily", status: "Now CR 82.5", update: "Since 12 Nov: <b>Lyrinex CR 82.5</b> (slow-release pregabalin, NIPRO JMI), written morning and night (165 mg a day). The US label for pregabalin CR says 'once daily after an evening meal', swallowed whole. Its kidney example: a person with creatinine clearance of 50 mL/min 'would receive a single daily dose of 82.5 mg'. Confirm the schedule with the doctor.", group: "Mind & pain",
      cmc: "Rheumatology advised 'continuation of pregabalin 75 mg twice daily' for pains and tingling.",
      benefits: ["Used to treat epilepsy and anxiety, and also nerve pain (NHS).", "It takes at least a few weeks to work (NHS)."],
      common: ["Headaches", "Feeling sleepy, tired or dizzy", "Difficulty sleeping", "Diarrhoea", "Mood changes", "Feeling or being sick", "Swollen hands, arms, legs and feet", "Blurred vision", "Weight gain", "Memory problems"],
      serious: ["Thoughts of self-harm (go to A&E / call an ambulance)", "Severe dizziness or passing out", "Seeing or hearing things that aren't there", "Problems peeing, blood in pee, or constipation", "Heartbeat faster or slower than usual", "Allergic reaction (call an ambulance)"],
      missed: "Take it as soon as you remember, unless the next dose is due within 2 hours; then skip it. Never take 2 doses (NHS).",
      ifStopped: "NHS: 'Do not stop taking pregabalin suddenly, even if you feel better.' Withdrawal can cause anxiety, sleep problems, feeling sick, pain and sweating. Some people can become addicted to pregabalin. The dose is reduced gradually.",
      watch: ["Other medicines that cause sleepiness or dizziness can add to these effects; tell the doctor before taking strong painkillers like codeine or morphine (NHS).", "Best to avoid alcohol; it may affect breathing (NHS).", "<b>Age:</b> the NHS says it 'might not be suitable for people older than 65'. She is 70; ask her doctor.", "Tell the doctor if the kidneys don't work well (NHS).", "She also takes sertraline and duloxetine, which can cause dizziness or drowsiness; the NHS says pregabalin can make these effects worse.", "Our note: dizziness plus her spine osteoporosis means falls are a particular worry."],
      sources: [["NHS: about pregabalin", "https://www.nhs.uk/medicines/pregabalin/about-pregabalin/"], ["NHS: who can take it", "https://www.nhs.uk/medicines/pregabalin/who-can-and-cannot-take-pregabalin/"], ["NHS: pregabalin side effects", "https://www.nhs.uk/medicines/pregabalin/side-effects-of-pregabalin/"], ["NHS: how and when to take", "https://www.nhs.uk/medicines/pregabalin/how-and-when-to-take-pregabalin/"], ["NHS: common questions", "https://www.nhs.uk/medicines/pregabalin/common-questions-about-pregabalin/"]]
    },
    {
      name: "Mego-XL", strength: "1 once daily", status: "Not on 12 Nov list", update: "Not on the 12 Nov prescription, but on the family's 16 Nov list. Ask whether to continue.", group: "Supplements",
      cmc: "On the discharge list; the summary doesn't say why. Her B12 (529) and folate (16.5) were within range at CMC.",
      benefits: ["Pharmacy listings show methylcobalamin (vitamin B12) 1500 mcg + alpha-lipoic acid 100 mg + vitamin B6 3 mg + folic acid 1.5 mg. Check the strip says 'XL': a similarly named 'Mego Plus' is reported to contain pregabalin too.", "Vitamin B12 is used to prevent and treat B12 deficiency (NHS; that page covers a different form, cyanocobalamin).", "Folic acid is used to treat folate-deficiency anaemia (NHS)."],
      common: ["B12: acne-like spots or rash (NHS)", "Folic acid: bloating, wind, feeling sick, loss of appetite (NHS)"],
      serious: ["Allergic reaction: swollen face, throat or tongue, itchy rash, difficulty breathing (NHS)", "B12: a rash with blisters, feeling faint, wheezing (NHS)"],
      missed: "Folic acid: take it when you remember, then the next dose at the usual time; never 2 doses (NHS).",
      ifStopped: "Not stated in the leaflets, and CMC didn't write why it was prescribed. Ask the doctor whether it's still needed.",
      watch: ["The NHS B12 leaflet lists acid-reducing medicines such as omeprazole (the same family as her pantoprazole) as possibly not mixing well.", "The NHS folic acid leaflet lists aspirin among medicines that may not mix well, and warns that 'taking too many multivitamin tablets or capsules can be dangerous'.", "<b>Not verified:</b> no official leaflet could be reached for alpha-lipoic acid or vitamin B6, so nothing is said about them here. Ask the pharmacist."],
      sources: [["NHS: vitamin B12 (cyanocobalamin)", "https://www.nhs.uk/medicines/cyanocobalamin/"], ["NHS: folic acid", "https://www.nhs.uk/medicines/folic-acid/"], ["Apollo Pharmacy: Mego-XL", "https://www.apollopharmacy.in/otc/mego-xl-capsule-15-s"], ["PharmEasy: Mego-XL", "https://pharmeasy.in/online-medicine-order/mego-xl-capsule-53709"]]
    },
    {
      name: "Shelcal 500", strength: "1 once daily", group: "Bones",
      cmc: "Calcium for osteoporosis (spine T-score −3.4).",
      benefits: ["Pharmacy listings: calcium carbonate (500 mg calcium) + vitamin D3 250 IU.", "Calcium supplement when diet alone isn't enough, for bones, muscles, nerves and heart (MedlinePlus)."],
      common: ["Upset stomach, vomiting, stomach pain, belching", "Constipation", "Dry mouth, metallic taste", "Loss of appetite, passing more urine"],
      serious: ["The calcium carbonate leaflet doesn't list serious effects. Signs of too much calcium (from the vitamin D leaflet): vomiting, confusion, bone or joint pain, irregular heartbeat."],
      missed: "Take it when you remember, unless it's nearly time for the next dose. Don't double up (MedlinePlus).",
      ifStopped: "Not stated in the leaflet. CMC prescribed it as part of the osteoporosis treatment.",
      watch: ["MedlinePlus says to take it with food or after meals, and to space it 1–2 hours apart from other medicines. Ask the pharmacist how to time it with her other tablets.", "Tell the doctor about any kidney disease (MedlinePlus)."],
      sources: [["MedlinePlus: calcium carbonate", "https://medlineplus.gov/druginfo/meds/a601032.html"], ["Apollo Pharmacy: Shelcal 500", "https://www.apollopharmacy.in/otc/shelcal-500-calcium-vitamin-d3-tablet-30-s"]]
    },
    {
      name: "Calcirol 60,000 IU (vitamin D3)", status: "Not on 12 Nov list", update: "Not on the 12 Nov prescription. Ask whether to finish the monthly course. 'Calcirol' sold in Bangladesh may be a different strength; check the pack.", strength: "Once a WEEK × 6 weeks, then once a MONTH × 6 months", group: "Bones",
      cmc: "Her vitamin D was 27 ng/ml (lab range >30). Prescribed as a course.",
      benefits: ["Treats and prevents vitamin D deficiency (NHS).", "Helps the body take in calcium and phosphorus from food; low vitamin D can lead to weak bones and osteoporosis (NHS)."],
      common: ["Stomach pain", "Feeling sick", "Headache"],
      serious: ["Signs of too much calcium: vomiting, confusion, bone or joint pain, irregular heartbeat", "High temperature with sharp pain in the side or lower back (possible kidney stones)", "Needing to pee more often, or swelling anywhere in the body"],
      missed: "NHS: if a daily or weekly dose is forgotten, take it as soon as you remember unless it's nearly time for the next dose; never 2 doses. For the monthly phase the leaflet doesn't say, so ask the pharmacist.",
      ifStopped: "NHS: 'your symptoms may come back and your bone health may be affected.'",
      watch: ["This is a high-strength capsule taken once a week, then once a month. It is <b>not</b> a daily tablet.", "The NHS says the doctor will arrange a blood test to check calcium levels; ask when hers is due.", "Don't add any other calcium or vitamin D supplements without asking the doctor (NHS). She already takes Shelcal, which contains both.", "Tell the doctor about kidney problems or past kidney stones (NHS)."],
      sources: [["NHS: colecalciferol", "https://www.nhs.uk/medicines/colecalciferol/"], ["NHS: how and when to take", "https://www.nhs.uk/medicines/colecalciferol/how-and-when-to-take-colecalciferol/"], ["NHS: with other medicines", "https://www.nhs.uk/medicines/colecalciferol/taking-colecalciferol-with-other-medicines-and-herbal-supplements/"], ["NHS: side effects", "https://www.nhs.uk/medicines/colecalciferol/side-effects-of-colecalciferol/"]]
    },
    {
      name: "Zoledronic acid (drip)", status: "Not given yet", update: "Still not given (family, 15 Nov). A bone density scan (BMD) was ordered on 12 Nov.", strength: "CMC sheet: 4 mg in 100 ml saline over 1 hour, at hometown", group: "Bones",
      cmc: "Chosen by the family for osteoporosis (spine T-score −3.4, 'Fracture Risk: High'). Pre-medicines on the sheet: Avil, hydrocortisone 100 mg, paracetamol 1 g. <b>Not given yet</b> (family, 15 Nov 2026).",
      benefits: ["Prevents and treats osteoporosis (MedlinePlus).", "For osteoporosis it is given 'once every 1 to 2 years' (MedlinePlus). The usual osteoporosis dose is 5 mg (FDA Reclast label), so confirm the 4 mg dose with the doctor."],
      common: ["Flu-like symptoms, fever, headache, chills, bone, joint or muscle pain, starting in the first 3 days; the FDA label says they usually settle within 3 days but may last up to 7–14 days (CMC wrote 2–3 days). The FDA label says paracetamol after the drip may reduce these symptoms; CMC's plan includes paracetamol", "Red, itchy or teary eyes", "Nausea, constipation, diarrhoea, stomach pain", "Pain or swelling where the drip went in"],
      serious: ["Jaw problems: painful or swollen gums, loosening teeth, numb or heavy jaw, a mouth sore that won't heal", "Dull, aching pain in the hips, groin or thighs (possible unusual thigh fracture)", "Irregular heartbeat or chest pain", "Signs of low calcium: muscle spasms, twitches or cramps, or numbness or tingling in the fingers, toes or around the mouth (FDA medication guide)", "Severe bone, muscle or joint pain, within days or months (MedlinePlus)", "Unusual bruising or bleeding", "Allergic reaction: rash, hives, trouble breathing or swallowing"],
      missed: "If a scheduled drip is missed, call the doctor as soon as possible (MedlinePlus).",
      ifStopped: "MedlinePlus says to continue as scheduled even if feeling well, and to discuss from time to time whether it's still needed. What happens if it's not given is not stated; CMC advised it for her osteoporosis; the DEXA report prints 'Fracture Risk: High' for the spine.",
      watch: ["A dentist should check her teeth before the first dose (MedlinePlus).", "Drink at least 2 glasses of water in the few hours before the drip; it may be delayed if she is dehydrated (MedlinePlus).", "Blood calcium is usually checked first, and kidney disease must be mentioned (MedlinePlus). Her creatinine rose from 0.7 to 1.0, so ask about a kidney check.", "MedlinePlus lists aspirin among medicines to tell the doctor about.", "FDA label: must not be given if kidney function (creatinine clearance) is below 35 mL/min; kidney function should be checked before each dose, and the risk is greater with older age or dehydration.", "FDA label: patients should have enough calcium and vitamin D, about 1200 mg calcium and 800–1000 IU vitamin D a day, especially in the 2 weeks after the drip. Ask the doctor whether her Shelcal and Calcirol cover this.", "Tell the doctor before any dental treatment while on this medicine (MedlinePlus)."],
      sources: [["MedlinePlus: zoledronic acid", "https://medlineplus.gov/druginfo/meds/a605023.html"], ["FDA label (Reclast, 5 mg for osteoporosis)", "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/021817s032lbl.pdf"]]
    },
    {
      name: "Pantoprazole", strength: "40 mg once daily", status: "Replaced 12 Nov", update: "Replaced by <b>Rabe 20 (rabeprazole)</b> on 12 Nov. See its card. Don't take both.", group: "Stomach & bowel",
      cmc: "On the discharge list; the summary doesn't say why.",
      benefits: ["Reduces the amount of acid the stomach makes; treats heartburn, reflux and stomach ulcers (NHS).", "Usually taken first thing in the morning, about an hour before a meal (NHS)."],
      common: ["Most people have no side effects (NHS)", "Uncommon: headaches, diarrhoea, feeling sick, constipation, dry mouth, tiredness"],
      serious: ["Joint pain with a red rash on sun-exposed skin", "Liver problems: yellow skin or eyes, dark pee, worsening stomach pain", "Kidney problems: peeing less, painful peeing, lower back pain, swollen ankles", "Severe or lasting diarrhoea", "Allergic reaction (call an ambulance)"],
      missed: "Take it when you remember, unless the next dose is due in less than 12 hours; then skip it. Never 2 doses (NHS).",
      ifStopped: "NHS: after long-term use, speak to the doctor first. 'Stopping suddenly could make your stomach produce a lot more acid', and reducing gradually prevents this.",
      watch: ["Use over 3 months: blood magnesium may drop (tiredness, confusion, dizziness, muscle twitches, irregular heartbeat) (NHS).", "Use over 1 year: may raise the risk of <b>bone fractures</b>, gut infections and low vitamin B12; the NHS says the doctor should check regularly. This matters with her osteoporosis.", "The NHS says it's best to take these medicines for the shortest time possible.", "Don't take St John's wort (NHS)."],
      sources: [["NHS: pantoprazole side effects", "https://www.nhs.uk/medicines/pantoprazole/side-effects-of-pantoprazole/"], ["NHS: how and when to take", "https://www.nhs.uk/medicines/pantoprazole/how-and-when-to-take-pantoprazole/"], ["NHS: common questions", "https://www.nhs.uk/medicines/pantoprazole/common-questions-about-pantoprazole/"]]
    },
    {
      name: "Naturolax (isabgol / ispaghula husk)", status: "Not on 12 Nov list", update: "Not on the 12 Nov prescription (the family gives isabgol each morning). Ezylife was added for hard stools. Ask whether to continue isabgol.", strength: "1 tablespoon in a glass of water, twice daily", group: "Stomach & bowel",
      cmc: "On the discharge list; the summary doesn't say why. (Her bowel problems were labelled probable IBS.)",
      benefits: ["A fibre laxative for constipation: bulks up poo with fluid so it's softer (NHS, Fybogel, the same ingredient).", "Takes 2 or 3 days to work (NHS). The NHS leaflet doesn't discuss IBS."],
      common: ["Wind and bloating, especially when fibre is increased suddenly"],
      serious: ["Allergic reaction (rare; call an ambulance)"],
      missed: "Skip the missed dose and take the next one at the usual time. Never 2 doses (NHS).",
      ifStopped: "Not stated. The NHS warns that without enough fluid, constipation may get worse.",
      watch: ["Always mix with plenty of cold water and drink plenty of fluid through the day; the NHS suggests adults aim for more than 2 litres.", "Take other medicines more than an hour before or after it (NHS interactions page; another NHS page says at least 30 minutes), and not right before bed (NHS).", "Before taking it, the NHS says to tell the doctor about tummy pain with feeling or being sick (could be a bowel blockage), or <b>difficulty swallowing or any throat problems</b>. That matters after a stroke.", "Try not to breathe in the powder (NHS)."],
      sources: [["NHS: Fybogel (ispaghula husk)", "https://www.nhs.uk/medicines/fybogel-ispaghula-husk/"], ["NHS: who can take it", "https://www.nhs.uk/medicines/fybogel-ispaghula-husk/who-can-and-cannot-take-fybogel/"], ["NHS: with other medicines", "https://www.nhs.uk/medicines/fybogel-ispaghula-husk/taking-fybogel-with-other-medicines-and-herbal-supplements/"], ["SastaSundar: Naturolax listing", "https://sastasundar.com/order-otc/naturolax-powder-100-g-zvu6uw"]]
    },
    {
      "name": "Rosuvastatin (Rosu 10)",
      "strength": "10 mg at night",
      "group": "Stroke prevention",
      "status": "New 12 Nov",
      "whyTitle": "Why it was prescribed",
      "cmc": "On 12 Nov Dr Rajib Das switched the statin from atorvastatin 10 to Rosu 10 (rosuvastatin, Popular Pharmaceuticals). The reason isn't written. Her LDL cholesterol was 162 in April, and a new lipid profile was ordered.",
      "watch": [
        "US label (Crestor): in Asian patients, 'Initiate CRESTOR at 5 mg orally once daily', because blood levels are about 2-fold higher; they 'may be at higher risk for myopathy' (muscle problems). Ask whether 10 mg is intended.",
        "Report unexplained muscle pain or weakness.",
        "A summary of the 2021 US stroke guideline (AAFP) gives an LDL goal of under 70 mg/dL after this type of stroke. Ask her doctor for her target."
      ],
      "sources": [
        [
          "Medex: Rosu 10",
          "https://medex.com.bd/brands/3401"
        ],
        [
          "DailyMed: Crestor label",
          "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=crestor"
        ],
        [
          "AAFP: 2021 stroke prevention guideline summary",
          "https://www.aafp.org/pubs/afp/issues/2022/0100/p99.html"
        ]
      ]
    },
    {
      "name": "Bizoran 5/20 (amlodipine + olmesartan)",
      "strength": "1 tablet at night",
      "group": "Blood pressure",
      "status": "Current BP tablet",
      "whyTitle": "Why it was prescribed",
      "cmc": "A blood pressure tablet (Beximco) with two medicines: amlodipine 5 mg and olmesartan 20 mg. CMC's discharge list had no BP tablet. In April she took Olmesan 20 (olmesartan alone). On 12 Nov: Bizoran 5/20 at night.",
      "watch": [
        "Bizoran leaflet: its BP-lowering effect 'may be attenuated by NSAIDs' (such as naproxen), and 'Blood pressure, renal function and electrolytes should be closely monitored' with that combination.",
        "Amlodipine: ankle swelling is a known side effect that depends on dose (US Azor label: 3.0% at 5 mg vs 10.8% at 10 mg).",
        "Olmesartan: the label advises checking kidney function and potassium periodically.",
        "Rarely, olmesartan causes severe long-lasting diarrhoea with weight loss, months to years after starting (US label). Tell the doctor if that happens.",
        "Don't take Olmesan 20 as well; it is already inside Bizoran."
      ],
      "sources": [
        [
          "Medex: Bizoran 5/20",
          "https://medex.com.bd/brands/3077/bizoran-5-mg-tablet"
        ],
        [
          "DailyMed: Azor (amlodipine + olmesartan) label",
          "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c5535406-b63b-49aa-88b9-169aaf0ed08e"
        ],
        [
          "NHS: amlodipine",
          "https://www.nhs.uk/medicines/amlodipine/"
        ]
      ]
    },
    {
      "name": "Quetiapine (Quiet 25)",
      "strength": "25 mg at night",
      "group": "Mind & pain",
      "status": "Restarted",
      "whyTitle": "Why it was prescribed",
      "cmc": "She took quetiapine 25 mg at bedtime before the stroke. CMC left it off the discharge list. It appears again on the 8 Apr and 12 Nov prescriptions (Quiet 25, Incepta). The reason isn't written.",
      "common": [
        "Constipation (NHS)",
        "Shaking, muscle stiffness or difficulty moving (NHS)",
        "Dizziness, feeling unsteady (MedlinePlus)"
      ],
      "serious": [
        "'Uncontrollable movements of your arms, legs, tongue, face, or lips' (MedlinePlus): tell the doctor"
      ],
      "watch": [
        "US label: it may cause sleepiness, a drop in BP on standing and unsteadiness, 'which may lead to falls and, consequently, fractures'. It advises caution with BP medicines.",
        "US guidance for older adults (Beers 2023) advises avoiding antipsychotics except for specific approved uses. Ask why it was restarted.",
        "The label's boxed warning is about older people with dementia; she has no dementia diagnosis."
      ],
      "sources": [
        [
          "NHS: quetiapine side effects",
          "https://www.nhs.uk/medicines/quetiapine/side-effects-of-quetiapine/"
        ],
        [
          "MedlinePlus: quetiapine",
          "https://medlineplus.gov/druginfo/meds/a698019.html"
        ],
        [
          "Medex: Quiet 25",
          "https://medex.com.bd/brands/4405/quiet-25-mg-tablet"
        ]
      ]
    },
    {
      "name": "Clonazepam (Pandura 0.5)",
      "strength": "0.5 mg at night",
      "group": "Mind & pain",
      "status": "New 12 Nov",
      "whyTitle": "Why it was prescribed",
      "cmc": "New on 12 Nov (Pandura 0.5, NIPRO JMI), at night. The reason isn't written. The Bangladesh listing gives panic disorder (and a type of epilepsy) as its uses. It is a benzodiazepine.",
      "common": [
        "Drowsiness (about 50% of patients) and unsteadiness/ataxia (about 30%), per the Pandura leaflet"
      ],
      "watch": [
        "US guidance for older adults (Beers 2023): benzodiazepines 'increase the risk of cognitive impairment, delirium, falls, fractures'. The recommendation is to avoid them.",
        "With pregabalin, duloxetine and quetiapine she is on 4 brain-acting medicines; Beers advises avoiding 3 or more together.",
        "'May be habit-forming' (MedlinePlus)."
      ],
      "ifStopped": "MedlinePlus says don't stop it suddenly; the doctor reduces it gradually.",
      "sources": [
        [
          "Medex: Pandura 0.5",
          "https://medex.com.bd/brands/17226"
        ],
        [
          "MedlinePlus: clonazepam",
          "https://medlineplus.gov/druginfo/meds/a682279.html"
        ],
        [
          "AGS Beers Criteria 2023 (PDF)",
          "https://geriatrictoolkit.missouri.edu/drug/Beers-Criteria-AGS-2023.pdf"
        ]
      ]
    },
    {
      "name": "Rabeprazole (Rabe 20)",
      "strength": "20 mg morning and night, before food",
      "group": "Stomach & bowel",
      "status": "New 12 Nov",
      "whyTitle": "Why it was prescribed",
      "cmc": "Replaced pantoprazole on 12 Nov (Rabe 20, Aristopharma), twice daily before food. It is an acid reducer (PPI).",
      "watch": [
        "Rabe leaflet: PPIs 'may modestly increase the risk of hip, wrist and spine fracture'. Low magnesium can occur after 3 months or more, and vitamin B12 absorption may fall.",
        "Napro-A Plus also contains an acid reducer (esomeprazole), so during that course she takes two. Ask if that is intended.",
        "Beers 2023 advises against scheduled PPI use for more than 8 weeks, except in high-risk people (for example, during ongoing NSAID use)."
      ],
      "sources": [
        [
          "Medex: Rabe 20",
          "https://medex.com.bd/brands/2261"
        ],
        [
          "AGS Beers Criteria 2023 (PDF)",
          "https://geriatrictoolkit.missouri.edu/drug/Beers-Criteria-AGS-2023.pdf"
        ]
      ]
    },
    {
      "name": "Sodium picosulfate (Ezylife 10)",
      "strength": "10 mg at night, only if the stool is hard",
      "group": "Stomach & bowel",
      "status": "New 12 Nov",
      "whyTitle": "Why it was prescribed",
      "cmc": "New on 12 Nov (Ezylife 10, Pharmasia), at night 'পায়খানা কষা হলে' (if the stool is hard). It is a stimulant laxative.",
      "watch": [
        "Gut bacteria activate it in the large bowel. Take it at night for an effect the next morning (Medex).",
        "UK label: it is for occasional constipation and 'should not be taken on a continuous daily basis for more than five days without investigating the cause'.",
        "UK label: dehydration risk is higher in older people and with kidney problems. Medex: too much can cause low potassium. She should drink enough fluid.",
        "Dizziness or fainting has been reported, mostly linked to straining (UK label).",
        "Not for use with a bowel blockage or severe dehydration (Medex)."
      ],
      "sources": [
        [
          "Medex: Ezylife 10",
          "https://medex.com.bd/brands/26988"
        ],
        [
          "UK label (Dulcolax Pico)",
          "https://www.medicines.org.uk/emc/product/11634"
        ]
      ]
    },
    {
      "name": "Naproxen + esomeprazole (Napro-A Plus 375/20)",
      "strength": "Morning and night for 10 or 15 days (digit unclear)",
      "group": "Short course",
      "status": "New 12 Nov · ask doctor",
      "whyTitle": "Why it was prescribed",
      "cmc": "New on 12 Nov (ACME). Naproxen is a painkiller and anti-inflammatory (NSAID); esomeprazole is built in to protect the stomach. The reason isn't written; the complaints listed were joint pains and burning pain.",
      "serious": [
        "Signs of stomach bleeding: black, tarry stools or vomiting blood. CMC's warning signs also include blood in stool."
      ],
      "watch": [
        "US naproxen label, boxed warning: 'increased risk of serious cardiovascular thrombotic events, including myocardial infarction and stroke'. Also: 'Elderly patients… at greater risk for serious GI events.'",
        "Label: naproxen 'interfered with the antiplatelet effect of low-dose immediate-release aspirin', and it is 'not a substitute' for aspirin.",
        "Label: NSAIDs with BP tablets like olmesartan (ARBs) 'may result in deterioration of renal function' in older people, and NSAIDs can raise BP.",
        "Label: watch for bleeding with aspirin and with SNRIs such as duloxetine.",
        "Beers 2023: avoid short-term scheduled NSAID use together with antiplatelets such as aspirin, unless alternatives don't work and stomach protection is given.",
        "Medex: take it at least 30 minutes before meals; not recommended in moderate to severe kidney impairment."
      ],
      "sources": [
        [
          "Medex: Napro-A Plus",
          "https://medex.com.bd/brands/11549"
        ],
        [
          "DailyMed: naproxen label",
          "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0de6d673-fa76-e9c0-e063-6394a90a9ded"
        ],
        [
          "AGS Beers Criteria 2023 (PDF)",
          "https://geriatrictoolkit.missouri.edu/drug/Beers-Criteria-AGS-2023.pdf"
        ]
      ]
    }
  ]
};
