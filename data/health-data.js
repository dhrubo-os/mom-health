// ============================================================================
//  Kana Saha — health record data
//  Everything the web app shows comes from this file.
//  To add a new report: copy the scan into scans/original/ (next page number),
//  run ./add-thumbs.sh, then add a document + timeline event below.
// ============================================================================

window.HEALTH = {
  patient: {
    name: "Kana Saha",
    dob: "1956-09-15",
    sex: "Female",
    heightCm: 146,
    weightKg: 62,
    ids: [
      { label: "CMC Vellore hospital no.", value: "053916P" },
      { label: "CMC MRD no.", value: "26R020595" },
      { label: "BSH Dhaka hospital no.", value: "H12012131866" }
    ],
    lastUpdated: "2026-11-15"
  },

  // ---------------------------------------------------------------------------
  // THE STORY — plain-language summary shown first
  // ---------------------------------------------------------------------------
  story: [
    {
      heading: "What happened, in one paragraph",
      body: "On the morning of 5 April 2026, while making breakfast, Ma's left upper eyelid suddenly drooped, her speech became slurred, and the right side of her body went partly numb. These were signs of a <b>small stroke in the brainstem</b>, the stalk at the base of the brain that joins it to the spinal cord. CMC Vellore diagnosed a <b>left lateral medullary infarct</b>: a tiny artery feeding the <b>left side of the medulla</b> (the lowest part of the brainstem) got blocked. CMC classed the cause as <b>small vessel disease</b>: long-term wear on the tiny arteries deep in the brain, mainly from long-term high blood pressure and ageing (cholesterol, diabetes and smoking add to it). CMC's heart echo, ECG and neck-artery Doppler were normal, which (our reading, not CMC's words) makes a clot from the heart or a narrowed neck artery less likely; CMC classed the cause as small vessel disease. (Note: the written Dhaka MRI report called the brainstem normal. See 'For the doctor'.)"
    },
    {
      heading: "Why the symptoms were on 'opposite' sides",
      body: "This is the part that confuses most families. The left side of the medulla holds three things packed close together: (1) the nerve pathway that keeps the <b>left eyelid</b> lifted, (2) the pathway carrying pain and temperature feeling from the <b>right side of the body</b> (those nerves cross over lower down, in the spinal cord), and (3) nerves for the muscles of speech. One small blockage there explains all three symptoms together: left eye drooping, right-side numbness, and slurred speech. Doctors call this pattern <b>lateral medullary syndrome</b> (Wallenberg syndrome). CMC wrote that the drooping eyelid is 'suggestive of <b>probable Horner syndrome</b>'."
    },
    {
      heading: "How serious was it?",
      body: "Fortunately it was <b>mild</b>. At CMC (about 8 weeks later) she had <b>full strength (5/5) in every muscle</b>, normal reflexes, normal balance and coordination, normal swallowing and normal eye movements. What remained: a <b>mild droop of the left eyelid</b> and <b>10–20% reduced feeling</b> in the right arm and leg. She was discharged <b>stable</b>."
    },
    {
      heading: "What the scans also found (mostly background, age-related)",
      body: "The brain scans also showed <b>old, 'silent' tiny strokes</b> (lacunar infarcts) deep in the brain and <b>white-matter changes</b>. These are the same small-vessel disease, built up quietly over years, and they show why controlling blood pressure and cholesterol matters so much now. A possible tiny <b>2.2 mm bulge in a brain artery (aneurysm)</b> seen on the Dhaka MRA was checked again: CMC's discharge summary says a <b>CT angiogram 'did not demonstrate any aneurysmal dilatation'</b> (the report itself, and where/when it was done, aren't in the scans). That is reassuring. (Very small aneurysms can be hard to see on CT angiography, so ask whether any repeat scan is ever needed.)"
    },
    {
      heading: "Other health problems CMC looked at during the same admission",
      body: "CMC used the admission for a full check-up. <b>Osteoporosis</b> (thin bones) was confirmed in the spine, with a high fracture risk, so a bone-strengthening drip (<b>zoledronic acid</b>) plus calcium and vitamin D were advised. The old <b>Hepatitis C antibody</b> result was checked: the virus itself is <b>not present</b> in the blood, the liver stiffness scan was normal, and there is 'no indication for antivirals at present'. The long-standing <b>bowel problems</b> were judged to be <b>probable</b> IBS. <b>Joint and body pains</b> were considered more likely due to wear-and-tear (degenerative) joint and spine disease. <b>Anxiety and poor sleep</b> were linked to stress, and medicines were adjusted."
    },
    {
      heading: "What matters most from here",
      body: "1) CMC prescribed <b>aspirin and a statin</b> as the stroke-prevention medicines; <b>blood pressure</b> control is equally important (and no BP tablet is named on the discharge sheet, so confirm it). 2) Keep <b>cholesterol</b> controlled. 3) Follow the <b>low-salt, low-fat, 1300-calorie diet</b>. The booklet lists a 'desirable weight' of 42–46 kg (she was 62 kg); ask the doctor or dietitian what a realistic, safe goal is. 4) Keep up <b>physiotherapy</b>. 5) <b>Arrange the zoledronic acid bone drip. It has not been given yet</b>, and her spine fracture risk is high (see the warning above). 6) <b>Book the CMC neurology review (due around early December 2026)</b>. 7) Know the <b>warning signs</b> that need an emergency visit."
    }
  ],

  // ---------------------------------------------------------------------------
  // BONE / SPINE FRACTURE ALERT (shown on Overview, Conditions, Timeline)
  // ---------------------------------------------------------------------------
  boneAlert: {
    title: "High risk of a broken bone in the spine (backbone), and the bone drip hasn't been given yet",
    facts: [
      "Her bone scan (DEXA, 2 Jun 2026) shows <b>osteoporosis in the lower spine</b>, T-score −3.4. The report itself prints <b>'Fracture Risk: High'</b>. The hip and forearm show thinning (osteopenia).",
      "CMC advised a <b>zoledronic acid drip</b> to strengthen her bones, as well as calcium (Shelcal) and vitamin D (Calcirol). <b>The family says the drip has not been given yet</b> (as of 15 Nov 2026)."
    ],
    signs: "NHS: osteoporosis often has no symptoms, and 'often, the first symptom will be breaking a bone after a minor fall or injury'. Small breaks in the spine can show as <b>back pain, a curved spine or hunched posture, or getting shorter</b>.",
    prevent: [
      "Shoes or slippers that fit well, don't slip off, and have a good grip",
      "A non-slip mat in the bath or shower; grab rails in the bathroom and rails on steps",
      "No loose rugs, wires or clutter to trip on",
      "Ask someone to help with lifting or reaching; be careful moving and lifting",
      "Carry a mobile phone at all times",
      "Regular eye tests and hearing checks (ear problems affect balance)",
      "Ask the doctor or pharmacist whether her medicines affect balance: pregabalin, sertraline and duloxetine all list dizziness or drowsiness",
      "Strength and balance activity on at least 2 days a week (ask her physiotherapist what's safe)"
    ],
    help: "NHS: go to hospital / call an ambulance for <b>severe pain after a fall or injury</b>, or if she falls and may have hurt her <b>head, back, neck or hip</b>, or <b>cannot get up</b>. See a doctor urgently if pain after a fall isn't getting better, and see a doctor if back pain doesn't improve after a few weeks or her back is becoming curved.",
    action: "Talk to her doctor <b>soon</b> about arranging the drip, rather than waiting for the December review. Ask about the dose (the sheet says 4 mg; 5 mg is usual for osteoporosis), a kidney blood test first, and a dental check first (MedlinePlus advises one before starting).",
    sources: [["NHS: osteoporosis", "https://www.nhs.uk/conditions/osteoporosis/"], ["NHS: preventing falls", "https://www.nhs.uk/conditions/falls/prevention/"], ["MedlinePlus: zoledronic acid", "https://medlineplus.gov/druginfo/meds/a605023.html"]],
    docs: ["cmc-dexa", "cmc-discharge"]
  },

  // ---------------------------------------------------------------------------
  // TIMELINE
  // ---------------------------------------------------------------------------
  // phase: "background" | "dhaka" | "gap" | "vellore" | "home" | "upcoming"
  timeline: [
    {
      id: "e-bg",
      date: "before 2026",
      sortDate: "2000-01-01",
      phase: "background",
      place: "Dhaka / Chittagong",
      title: "Health background before the stroke",
      summary: "Long-standing conditions recorded in the CMC history.",
      details: [
        "High blood pressure for about 15 years, on regular treatment.",
        "Hepatitis C antibody found positive in 2019; an outside virus test (HCV RNA) was negative (date not stated). Under hepatology follow-up.",
        "Post-menopausal osteoporosis, on treatment since 2019.",
        "Asthma since childhood (not on regular medicines).",
        "Osteoarthritis of both knees.",
        "Alternating constipation/diarrhoea for about 10 years, worse in the last 3. Colonoscopy in 2022 was reportedly normal (verbal report, no documents); labelled IBS.",
        "Occasional vertigo, treated with betahistine when needed.",
        "High cholesterol (dyslipidemia).",
        "Anxiety with obsessive-compulsive symptoms and poor sleep, on fluoxetine 20 mg + quetiapine 25 mg.",
        "Hysterectomy and tubal ligation about 20 years ago."
      ],
      docs: []
    },
    {
      id: "e-onset",
      date: "5 Apr 2026, ~10:30–11:00 AM",
      sortDate: "2026-04-05T10:30",
      phase: "dhaka",
      place: "Home",
      title: "Stroke begins",
      summary: "While making breakfast, her son noticed the left upper eyelid drooping. Her speech became slurred at the same time, and she felt reduced sensation on the right side of her body.",
      details: [
        "Sudden onset, and the symptoms persisted.",
        "No arm or leg weakness, no vertigo, no swallowing trouble, no headache, no vomiting, no loss of consciousness (per the CMC history)."
      ],
      docs: []
    },
    {
      id: "e-bsh-er",
      date: "5 Apr 2026, 1:00 PM",
      sortDate: "2026-04-05T13:00",
      phase: "dhaka",
      place: "Bangladesh Specialized Hospital, Dhaka — Emergency",
      title: "Emergency visit + CT brain",
      summary: "Seen in the emergency room (the ER note says symptoms 'for last 3 hrs'). She was fully alert (GCS 15/15) with BP 130/70. The CT brain showed small old and recent 'lacunar' strokes deep in both sides of the brain. The on-call neuromedicine doctor advised admission, but no bed was available, so the ER paper says she was referred to another hospital. (Her tests were still done at BSH that night and the next day.)",
      details: [
        "Diagnosis written: CVD (cerebrovascular disease, i.e. stroke).",
        "The ER doctor wrote 'left-sided weakness'. CMC later found no weakness, only right-sided numbness (see 'For the doctor').",
        "Blood sugar on arrival 9.3 mmol/L.",
        "The CT report says 'Brain stem and cerebellum unremarkable'."
      ],
      docs: ["bsh-er"]
    },
    {
      id: "e-bsh-workup",
      date: "5–6 Apr 2026",
      sortDate: "2026-04-05T22:00",
      phase: "dhaka",
      place: "BSH Dhaka — tests referred by Prof. Dr. Narayan Chandra Kundu",
      title: "MRI + MRA brain, heart echo, ECG, blood tests, abdominal ultrasound",
      summary: "Most of these reports list Prof. Narayan Chandra Kundu as the referring doctor (his specialty isn't printed; the ECG names no doctor). MRI (detailed brain scan): one old, tiny 'silent' stroke deep in the left side of the brain (left lentiform nucleus); wear-and-tear changes in the brain's small blood vessels; mild age-related shrinkage; and an 'empty sella' (usually harmless). The written MRI report says the brainstem looked normal. MRA (scan of the brain's arteries): a possible tiny 2.2 mm bulge (aneurysm) on an artery at the front of the brain. Blood test: 'bad' cholesterol high (LDL 162). Heart echo: pumping well, but the heart muscle a little stiff (diastolic dysfunction). Belly ultrasound: enlarged, fatty liver, and the left kidney sitting low in the pelvis.",
      details: [
        "MRI recommended a cerebral DSA (catheter angiogram) 'if clinically indicated' to check the aneurysm. CMC's discharge summary says a CT cerebral angiogram (after a neurosurgery consult) did not show an aneurysm.",
        "Mild anaemia (Hb 11.1) and high ESR (48).",
        "HbA1c 5.3% (normal, no diabetes)."
      ],
      docs: ["bsh-mri", "bsh-labs", "bsh-echo", "bsh-ecg", "bsh-usg"]
    },
    {
      id: "e-gap",
      date: "6 Apr – 28 May 2026",
      sortDate: "2026-04-07",
      phase: "gap",
      place: "—",
      title: "Between Dhaka and Vellore (no documents yet)",
      summary: "There are no reports from this period in the scans. If there is a prescription from Prof. Kundu, a paper from any other hospital she went to, or any medicine list, add it here.",
      details: [],
      docs: []
    },
    {
      id: "e-cmc-opd",
      date: "29–30 May 2026",
      sortDate: "2026-05-29",
      phase: "vellore",
      place: "CMC Vellore, Ranipet Campus",
      title: "First tests at CMC: blood tests + ECG",
      summary: "Blood count, kidney, liver, sugar (HbA1c 5.7%) and thyroid tests, dated 29 May; ECG dated 30 May. The discharge summary calls routine blood tests within normal limits (Hb 11.0 is at the bottom of CMC's printed range). The discharge summary reports the ECG as normal sinus rhythm.",
      details: [],
      docs: ["cmc-ecg", "cmc-discharge"]
    },
    {
      id: "e-cmc-admit",
      date: "1 Jun 2026",
      sortDate: "2026-06-01",
      phase: "vellore",
      place: "CMC Vellore — Neurology ward D402",
      title: "Admitted to Neurology",
      summary: "Admitted for 'further evaluation, disease reassessment, and management'. On examination: a mild droop of the left eyelid (ptosis), full muscle strength in every limb, and 10–20% less feeling for touch and pain in the right arm and leg. CMC's diagnosis: a small stroke on the left side of the medulla, the lowest part of the brainstem (left lateral medullary infarct), caused by a blocked tiny artery (TOAST: small vessel disease).",
      details: [
        "Blood tests: Hepatitis C virus PCR NEGATIVE (no active infection). HIV and Hepatitis B negative. Vitamin D slightly below the lab's range (27; lab wants >30). B12 and folate normal.",
        "Inflammation markers: ESR 47 (no range printed), CRP 6.41 (just above CMC's printed <6); rheumatoid factor negative. The discharge summary itself describes the inflammatory markers as normal."
      ],
      docs: ["cmc-discharge"]
    },
    {
      id: "e-cmc-scans",
      date: "2 Jun 2026",
      sortDate: "2026-06-02",
      phase: "vellore",
      place: "CMC Vellore",
      title: "Bone density, carotid Doppler, heart echo, abdominal ultrasound",
      summary: "Bone scan (DEXA): OSTEOPOROSIS (thin, fragile bones) in the lower spine, T-score −3.4, with the report printing 'Fracture Risk: High'; thinning (osteopenia) at the hip and forearm. Neck arteries (carotid Doppler): no fatty build-up, 'Normal study'. Heart echo: pumping normally (EF 60.5%), small valve leaks, mild stiffness (grade I), no clot seen. Belly ultrasound: liver enlarged with a slightly grainy look, which the radiologist called 'early features of chronic liver disease'; the left kidney sits low in the pelvis and is turned (malrotated), 7.2 cm (the report says both 'normal in size' and 'appears shrunken').",
      details: [],
      docs: ["cmc-dexa", "cmc-carotid", "cmc-echo", "cmc-usg"]
    },
    {
      id: "e-cmc-diet",
      date: "3 Jun 2026",
      sortDate: "2026-06-03",
      phase: "vellore",
      place: "CMC Dietetics",
      title: "Diet plan from the dietitian",
      summary: "A 1300-calorie, weight-reducing, salt-restricted diet: 5 g salt (1 tsp) per day, 10 g oil per day (written as 1 tsp sunflower + 2 tsp mustard), skim milk, no red meat, no egg yolk, no ghee or butter, no sweets or fried food. Sugar is crossed out on the printed avoid list and 'Sugar' is handwritten beside the salt line, so ask the dietitian how much sugar is allowed. Desirable weight (as written): 42–46 kg.",
      details: ["Bone-turnover blood tests (Beta-CrossLaps, P1NP) were normal, and the stool calprotectin test (gut inflammation) was negative."],
      docs: ["cmc-diet"]
    },
    {
      id: "e-cmc-fibro",
      date: "4 Jun 2026",
      sortDate: "2026-06-04",
      phase: "vellore",
      place: "CMC Hepatology",
      title: "FibroScan of the liver: reassuring",
      summary: "Liver stiffness 4.3 kPa means significant scarring (fibrosis) is unlikely. Fat score (CAP) 231 means no significant fatty liver. Recommendation: repeat it periodically.",
      details: ["During this admission, Neurosurgery also reviewed the aneurysm question. A CT cerebral angiogram did not demonstrate any aneurysm. (The CT angiogram report itself is not in the scans.)"],
      docs: ["cmc-fibroscan"]
    },
    {
      id: "e-cmc-discharge",
      date: "5 Jun 2026",
      sortDate: "2026-06-05",
      phase: "vellore",
      place: "CMC Vellore",
      title: "Discharged: stable",
      summary: "Discharged on aspirin, atorvastatin, sertraline, duloxetine, pregabalin, a B-vitamin capsule, calcium, a vitamin D course, pantoprazole and isabgol fibre. Advice: home physiotherapy, the occupational therapy exercises, the diet plan, and a zoledronic acid drip to be given at their hometown (it is an IV infusion).",
      details: [
        "Follow-up: Neurology OPD/PCF with Dr. Aditya Nair, by prior appointment, after 6 months, or sooner if anything new or worse appears.",
        "Discharge summary written by Dr. Vutukuru Kalyan Kumar Reddy; consultant Dr. Deepti Bal (Neurology)."
      ],
      docs: ["cmc-discharge"]
    },
    {
      id: "e-zol",
      date: "after 5 Jun 2026",
      sortDate: "2026-06-10",
      phase: "home",
      place: "Hometown",
      title: "Zoledronic acid drip: NOT given yet (as of 15 Nov 2026)",
      summary: "CMC advised giving the bone-strengthening drip at their hometown 'as per protocol', with pre-medicines (Avil, hydrocortisone, paracetamol), 4 mg in 100 ml saline over 1 hour. The usual osteoporosis dose of zoledronic acid is 5 mg once a year, so confirm the dose and repeat interval with the doctor (see 'For the doctor'). CMC wrote that mild fever and body aches may last 2–3 days. As of 15 Nov 2026 the family says it has NOT been given yet. Until it is, her spine fracture risk stays high (see the warning on the Overview page).",
      details: [],
      docs: ["cmc-discharge"]
    },
    {
      id: "e-vitd",
      date: "Jun 2026 → ~Jan 2027",
      sortDate: "2026-06-11",
      phase: "home",
      place: "Home",
      title: "Vitamin D (Calcirol 60,000 IU) course",
      summary: "Once a week for 6 weeks (until about mid-July 2026), then once a month for 6 months (until about January 2027).",
      details: [],
      docs: ["cmc-discharge"]
    },
    {
      id: "e-review",
      date: "due ~early Dec 2026",
      sortDate: "2026-12-05",
      phase: "upcoming",
      place: "CMC Vellore, Ranipet — Neurology OPD/PCF",
      title: "6-month neurology review with Dr. Aditya Nair",
      summary: "No exact date is printed; the summary says 'after 6 months', so this date is an estimate. A prior appointment is required. The discharge summary says to book at www.cmch-vellore.edu → Patient Services → Appointments (needs net banking or a credit/debit card); on the current website this is under Patient Portal / 'Book appointment'. Take ALL reports, the MRI CD/films, the diet booklet and the current medicine strips.",
      details: [],
      docs: []
    }
  ],

  // ---------------------------------------------------------------------------
  // DOCUMENTS
  // pages: numbers of scans/original/page-XX.jpg
  // ---------------------------------------------------------------------------
  documents: [
    {
      id: "bsh-er",
      title: "Emergency Discharge Summary + CT Brain",
      hospital: "Bangladesh Specialized Hospital, Dhaka",
      date: "2026-04-05",
      category: "Discharge / Brain imaging",
      doctor: "Dr. Farhan Mahim Atonu (Emergency Medical Officer)",
      pages: [1, 2],
      keyFindings: [
        "Complaint (as written): slurred speech with 'dropping of left eye' with 'left sided weakness' for last 3 hrs",
        "Known high blood pressure (HTN)",
        "GCS 15/15, BP 130/70, pulse 66, SpO₂ 98%, blood sugar 9.3 mmol/L",
        "CT: few lacunar infarcts (recent and old) in both capsuloganglionic regions",
        "CT: mild–moderate generalised brain atrophy with deep white-matter ischaemic changes",
        "CT: 'Brain stem and cerebellum unremarkable'",
        "Neuromedicine advised admission; no bed available, so referred to another hospital"
      ],
      plain: "This is the emergency room paper from the first day. The CT scan (a quick X-ray-based brain scan) showed a few <b>small 'lacunar' strokes</b> deep in both halves of the brain, some old, some possibly recent. 'Capsuloganglionic' just names that deep area. It also showed <b>age-related shrinkage</b> and <b>white-matter changes</b>, signs that the brain's tiny blood vessels have been under strain for years (usually from blood pressure; general knowledge). The CT report calls the brainstem unremarkable; in general, CT is not good at seeing small brainstem strokes. An MRI was done next. The line 'PNS: DNS to right. HIT (left)' is about her <b>nose</b>, not her brain. In plain words: the wall between her two nostrils is bent towards the right (DNS = deviated nasal septum), and one of the small ridges inside the left side of her nose is swollen (HIT most likely = hypertrophied inferior turbinate; the MRI the next day says 'Left inferior turbinate is hypertrophied'). Both are common, and neither has anything to do with the stroke.",
      terms: ["lacunar", "capsuloganglionic", "hypodense", "atrophy", "white-matter", "gcs"]
    },
    {
      id: "bsh-mri",
      title: "MRI Brain with MR Angiography",
      hospital: "Bangladesh Specialized Hospital, Dhaka",
      date: "2026-04-06",
      category: "Brain imaging",
      doctor: "Ref: Prof. Dr. Narayan Chandra Kundu · Reported by Prof. Dr. R. N. Sarker (Robin)",
      pages: [3, 4],
      keyFindings: [
        "Clinical info: left partial ptosis for 1 day; slurred speech a few times, which resolved",
        "Chronic (old) lacunar infarct in the LEFT lentiform nucleus. No restricted diffusion, so it is not new",
        "Bilateral deep white-matter microvascular chronic ischaemic change",
        "'The posterior fossa, brain stem and CP angles are normal'",
        "Mild cortical atrophy (fronto-parietal)",
        "Empty sella",
        "MRA: suggestive of a small saccular aneurysm at the left AComA, 2.2 mm dome, 1.0 mm neck",
        "MRA: mildly hypoplastic left PCA, a normal variant",
        "Mild chronic sinusitis; enlarged left inferior turbinate",
        "Recommendation: cerebral DSA if clinically indicated"
      ],
      plain: "MRI is the detailed brain scan. Item by item:<br><br>• <b>Old lacunar infarct, left lentiform nucleus</b>: an old, tiny 'silent' stroke deep in the brain. The 'DWI' sequence shows new strokes brightly; this one was not bright, so it is old.<br>• <b>White-matter microvascular change</b>: wear on the small blood vessels (in general, common with age and long-term high BP).<br>• <b>Mild atrophy</b>: mild age-related shrinkage.<br>• <b>Empty sella</b>: the pocket that holds the pituitary gland looks filled with fluid, and the gland looks flattened. In general usually a harmless incidental finding; ask whether any hormone tests are needed (a normal thyroid TSH alone doesn't check the pituitary fully).<br>• <b>Possible tiny aneurysm (2.2 mm)</b>: a small bulge on an artery at the front of the brain. <b>CMC's discharge summary says a CT cerebral angiogram did not show an aneurysm.</b><br>• <b>Hypoplastic left PCA</b>: one artery is naturally a bit thinner. Normal variation, which people are born with.<br>• <b>Sinusitis / turbinate</b>: nose and sinus findings, not related to the stroke.<br><br><b>Important:</b> this written report says <b>'The posterior fossa, brain stem and CP angles are normal'</b> and found no new (restricted-diffusion) stroke. But CMC's discharge summary says this MRI 'demonstrated a left medullary infarct'. The two documents disagree. CMC may have reviewed the images themselves (in general, small medulla strokes can be missed), but that is not written anywhere. This is the most important question for the review. See 'For the doctor'.",
      terms: ["lacunar", "lentiform", "flair", "dwi", "white-matter", "atrophy", "empty-sella", "aneurysm", "acoma", "pca", "dsa", "mra"]
    },
    {
      id: "bsh-labs",
      title: "Blood & Urine Tests (CBC, sugar, kidney, lipids, HbA1c, urine)",
      hospital: "Bangladesh Specialized Hospital, Dhaka",
      date: "2026-04-05",
      category: "Lab tests",
      doctor: "Ref: Prof. Dr. Narayan Chandra Kundu · Dr. Sharmin Jahan Shelly",
      pages: [22, 23, 24, 25, 26],
      keyFindings: [
        "Haemoglobin 11.1 g/dL (low; normal 11.5–15)",
        "ESR 48 mm (high; normal <20)",
        "Total cholesterol 251 (High: >239) · Triglycerides 235 (High: 200–499) · LDL 162 · HDL 41 (report range >40)",
        "HbA1c 5.3% (normal, no diabetes)",
        "Random sugar 5.0 mmol/L, creatinine 0.7, sodium 136, potassium 3.7: normal",
        "Urine routine: no protein, sugar or blood; pus cells 1–3"
      ],
      plain: "The most important result here is <b>cholesterol</b>. LDL ('bad' cholesterol) was 162, well above the general 'optimal' level of under 100 (after a stroke doctors often aim lower; ask for her target). High LDL is a risk factor that likely contributed, and she is now on <b>atorvastatin</b>. Haemoglobin was slightly below this lab's range (<b>mild anaemia</b>). ESR, a non-specific inflammation marker, was high; the cause isn't stated in the reports. Creatinine, sugar and the urine values were within the printed ranges.",
      terms: ["ldl", "hdl", "hba1c", "esr", "hb"]
    },
    {
      id: "bsh-echo",
      title: "Echocardiogram + Colour Doppler",
      hospital: "Bangladesh Specialized Hospital, Dhaka",
      date: "2026-04-06",
      category: "Heart",
      doctor: "Prof. Abdullah Al Shafi Majumder",
      pages: [20, 21],
      keyFindings: [
        "LVEF 62%: good pumping",
        "Borderline concentric hypertrophy of the LV (slightly thick heart wall)",
        "Mitral regurgitation grade I (tiny valve leak)",
        "LV diastolic dysfunction grade II",
        "Mild pulmonary hypertension (PASP 36 mmHg)"
      ],
      plain: "An echo is an ultrasound of the heart. The heart <b>pumps well</b> (EF 62%; normal is about 50–70%). The wall is <b>slightly thick</b>, which is typical after years of high blood pressure. <b>Diastolic dysfunction</b> means the heart muscle is a bit stiff and relaxes slowly between beats. This report called it grade II. <b>Mild pulmonary hypertension</b> means slightly raised pressure in the lung arteries. <b>CMC's echo about 2 months later was milder</b>: grade I stiffness and no pulmonary hypertension mentioned; CMC's discharge summary calls the 2D echo normal. Readings vary between machines and operators. (This Dhaka report does not comment on clots; CMC's echo saw no clot.)",
      terms: ["echo", "ef", "diastolic", "lvh", "mr", "pah"]
    },
    {
      id: "bsh-ecg",
      title: "ECG",
      hospital: "Bangladesh Specialized Hospital, Dhaka",
      date: "2026-04-06",
      category: "Heart",
      doctor: "",
      pages: [36],
      keyFindings: ["Heart rate 57: sinus bradycardia (slightly slow)", "Otherwise normal ECG"],
      plain: "An ECG records the heart's electrical rhythm. The rhythm was <b>regular and normal</b>, just slightly slow (57 per minute; under 60 is called 'bradycardia'). In general this is common. This is a machine reading; no atrial fibrillation (an irregular rhythm that can cause strokes) was seen on this short tracing, though a short ECG can't rule out an irregular rhythm that comes and goes.",
      terms: ["ecg", "af"]
    },
    {
      id: "bsh-usg",
      title: "Ultrasound — Whole Abdomen",
      hospital: "Bangladesh Specialized Hospital, Dhaka",
      date: "2026-04-06",
      category: "Abdomen",
      doctor: "Dr. Sabrina Q. Rashid",
      pages: [27, 28],
      keyFindings: [
        "Liver 186 mm: 'Moderate homogeneous hepatomegaly with fatty change, Gd-I'",
        "Left kidney 67 mm, located in the pelvis (pelvic kidney)",
        "Gallbladder, pancreas, spleen, right kidney, bladder: normal"
      ],
      plain: "The liver looked <b>enlarged and slightly fatty</b>. CMC later measured it smaller (15.4 cm) and its FibroScan found <b>no significant fat or scarring</b>. The <b>left kidney sits low in the pelvis</b> instead of in the back. In general a kidney in this position is something a person is born with (an 'ectopic' kidney); the report itself just says 'Left sided pelvic kidney'. Worth telling any doctor who scans her abdomen.",
      terms: ["fatty-liver", "pelvic-kidney"]
    },
    {
      id: "cmc-ecg",
      title: "ECG",
      hospital: "CMC Vellore, Ranipet Campus",
      date: "2026-05-30",
      category: "Heart",
      doctor: "",
      pages: [37],
      keyFindings: ["Rate 73, sinus rhythm (normal)", "Machine note: 'minimal ST elevation, anterior leads', otherwise normal (unconfirmed)"],
      plain: "A regular rhythm at 73 per minute. The ECG machine printed an automatic, 'unconfirmed' note about 'minimal ST elevation'. CMC's discharge summary reports the ECG as <b>normal sinus rhythm</b>.",
      terms: ["ecg"]
    },
    {
      id: "cmc-discharge",
      title: "Neurology Discharge Summary",
      hospital: "CMC Vellore, Ranipet Campus — Neurology",
      date: "2026-06-05",
      category: "Discharge",
      doctor: "Dr. Deepti Bal (Assoc. Prof.) · written by Dr. V. Kalyan Kumar Reddy · review with Dr. Aditya Nair",
      pages: [5, 6, 7, 8, 9, 10, 11],
      keyFindings: [
        "DIAGNOSIS: Ischaemic stroke, left lateral medullary infarct, TOAST: small vessel disease",
        "Also: probable IBS, osteoporosis, osteoarthritis, hypertension, dyslipidaemia, anxiety symptoms",
        "Exam: alert; left ptosis; full strength 5/5 all limbs; 10–20% reduced touch/pain in right arm and leg; no cerebellar signs; antalgic (pain-related) gait",
        "Neurosurgery: CT cerebral angiography 'did not demonstrate any aneurysmal dilatation'",
        "ECG, 2D echo, carotid Doppler: normal (as written in the discharge summary)",
        "Hep C: weakly positive antibody but virus PCR negative, so no antivirals needed",
        "DEXA: osteoporosis of lumbar spine (T −3.4); zoledronic acid chosen",
        "Psychiatry: stress-related anxiety; sertraline started",
        "Rheumatology: degenerative joint and spine disease; physio + pregabalin",
        "Condition at discharge: STABLE",
        "Review in Neurology OPD with Dr. Aditya Nair after 6 months"
      ],
      plain: "This is the <b>most important document</b>. It brings everything together.<br><br><b>The stroke:</b> CMC concluded it was a <b>left lateral medullary infarct</b>, a small stroke in the left side of the lowest part of the brainstem. The summary says the outside MRI 'demonstrated a left medullary infarct' (although the written Dhaka MRI report calls the brainstem normal; see 'For the doctor'). The symptom pattern (left eyelid droop plus right-body numbness) fits that location. Under 'TOAST' (a system for classifying stroke cause) it is <b>small vessel disease</b>: blockage of a tiny artery, typically from long-term high BP and ageing. Heart and neck-artery tests were normal, which (our reading) makes a clot from the heart or a narrowed neck artery less likely.<br><br><b>Treatment:</b> antiplatelet (aspirin), a statin (atorvastatin), risk-factor control, physiotherapy and occupational therapy.<br><br><b>The aneurysm worry is reassuring:</b> the CT angiogram did not show one.<br><br><b>Other issues</b> were each reviewed by the relevant specialist: bones (endocrinology), liver/Hep C (hepatology), bowels (gastroenterology), joint pains (rheumatology), anxiety and sleep (psychiatry).<br><br><b>Emergency signs listed by CMC:</b> any NEW weakness, sudden severe headache, blackouts or seizures, bleeding from the gums or blood in stool. Go to the nearest hospital, or call CMC on 92800 43437 (24×7).",
      terms: ["lateral-medullary", "horner", "toast", "small-vessel", "ptosis", "antiplatelet", "statin", "dexa", "hcv"]
    },
    {
      id: "cmc-dexa",
      title: "Bone Density (DEXA) — spine, hip, forearm",
      hospital: "CMC Vellore — Endocrinology",
      date: "2026-06-02",
      category: "Bones",
      doctor: "",
      pages: [15, 16, 14, 18, 17, 19, 40],
      keyFindings: [
        "Lumbar spine L1–L4: T-score −3.4 → OSTEOPOROSIS, fracture risk HIGH",
        "Left hip femoral neck: T-score −2.3 → osteopenia (total hip −1.2)",
        "Left forearm: '1/3' site of radius + ulna T-score −2.2 (total −2.3) → osteopenia, fracture risk increased",
        "Height 146 cm, weight 62 kg"
      ],
      plain: "DEXA measures bone mineral density. The <b>T-score</b> compares her bones with a healthy young adult. Above −1 is normal, −1 to −2.5 is <b>osteopenia</b> (thinning), and −2.5 or lower is <b>osteoporosis</b>. Her <b>spine is −3.4</b>: clearly osteoporosis, and the report prints 'Fracture Risk: High'. This is why CMC recommended the <b>zoledronic acid</b> drip plus calcium and vitamin D. In general, <b>preventing falls</b> at home (night light, no loose rugs, grab bars) matters a lot. Note: the machine compared her with a 'White Female' reference group. Several pages are colour and black-and-white copies of the same results.",
      terms: ["dexa", "t-score", "osteoporosis", "osteopenia", "zoledronic"]
    },
    {
      id: "cmc-usg",
      title: "Ultrasound — Abdomen & Pelvis",
      hospital: "CMC Vellore — Radiology",
      date: "2026-06-02",
      category: "Abdomen",
      doctor: "Dr. Nitin Inbaraj",
      pages: [38],
      keyFindings: [
        "Liver enlarged (~15.4 cm), mildly coarse, mildly irregular surface; no lesion",
        "Impression: early features of chronic liver disease; hepatomegaly",
        "Left kidney 7.2 cm, malrotated, in the pelvis. Findings say 'Normal in size (7.2 cm)'; impression says 'appears shrunken'; right kidney 10.3 cm normal",
        "Spleen, gallbladder, pancreas, bladder normal; no fluid"
      ],
      plain: "The radiologist's impression was <b>'Mildly coarse liver parenchyma – early features of chronic liver disease'</b> and an enlarged liver, with a mildly irregular surface. The <b>FibroScan</b> two days later said significant scarring is unlikely and did not suggest fatty liver, and her liver blood tests were within range. CMC advised <b>serial monitoring</b>; no liver treatment was prescribed. The <b>left kidney</b> sits in the pelvis and is rotated; in general that position is present from birth, but the report contradicts itself on size ('normal in size' vs 'appears shrunken'). Her creatinine rose from 0.7 (Apr) to 1.0 (May), still inside the lab range; ask the doctor about her kidney function (eGFR), especially before the zoledronic acid drip.",
      terms: ["chronic-liver", "pelvic-kidney"]
    },
    {
      id: "cmc-carotid",
      title: "Carotid Doppler (neck arteries)",
      hospital: "CMC Vellore — Radiology",
      date: "2026-06-02",
      category: "Blood vessels",
      doctor: "Dr. Thomas Pravin Kumar",
      pages: [39],
      keyFindings: ["Both carotid and vertebral arteries normal", "No plaques; wall thickness (IMT) 0.6–0.7 mm, normal", "Impression: NORMAL study"],
      plain: "This ultrasound checks the big arteries in the neck that carry blood to the brain. The report found <b>no plaques</b>, normal flow in both carotid and both vertebral arteries, and calls it a <b>'Normal study'</b>. Good news. It fits CMC's conclusion that the stroke came from tiny vessels rather than the big arteries (the vertebral arteries are the ones that supply the brainstem).",
      terms: ["carotid", "imt"]
    },
    {
      id: "cmc-echo",
      title: "Echocardiogram",
      hospital: "CMC Vellore, Ranipet — Cardiology",
      date: "2026-06-02",
      category: "Heart",
      doctor: "",
      pages: [41, 42],
      keyFindings: [
        "Normal LV systolic function (EF 60.5%); no wall-motion problems",
        "Mild MAC; trace MR; mild AR; mild TR",
        "Grade I LV diastolic dysfunction",
        "Normal RV function; NO clot, vegetation or pericardial effusion"
      ],
      plain: "The heart <b>pumps normally</b>. The small valve leaks (trace or mild) and the mild calcium on the mitral valve ring (MAC) are, in general, common with age and often need no treatment. <b>Grade I diastolic dysfunction</b> is the mildest stage of stiffness. <b>No clot was seen</b> in the heart. That makes a heart source less likely, though one echo can't completely rule it out.",
      terms: ["echo", "ef", "diastolic", "mac", "mr"]
    },
    {
      id: "cmc-diet",
      title: "Diet Booklet — Hypertension (Bengali/English)",
      hospital: "CMC Vellore — Dietetics",
      date: "2026-06-03",
      category: "Diet",
      doctor: "Dietitian (sign. P1939)",
      pages: [29, 30, 31, 32, 33, 34, 35],
      keyFindings: [
        "1300-calorie, weight-reducing, salt-restricted diet",
        "Desirable weight 42–46 kg (current 62 kg)",
        "Salt 5 g (1 tsp) per day · Oil 10 g per day (1 tsp sunflower + 2 tsp mustard), as written",
        "'Sugar' is handwritten beside the salt line and sugar is crossed out on the avoid list; meaning unclear, so ask the dietitian",
        "AVOID: mutton, beef, pork, prawn, crab, shellfish, egg yolk, ghee, butter, cheese, all salted foods (handwritten); printed list: sweets, honey, jaggery, fried foods, cakes, soft drinks",
        "OK: fish/skinless chicken 75 g, egg whites, skim milk, dal, vegetables, measured fruit"
      ],
      plain: "A daily plan with meal times (6 AM, 8 AM, 10 AM, 12:30, 4:30, 8 PM, 9:30 PM). Every meal is built from 'exchanges' (fixed portions). For example, 1 cereal exchange = ½ cup cooked rice or 1 roti. The <b>handwritten additions</b> are personal to her: avoid mutton, beef, pork, prawn, crab, shellfish, egg yolk, ghee, butter, cheese and 'All salted foods'. Sugar (চিনি) is <b>crossed out</b> on the printed avoid list, and 'Sugar' is written next to the salt allowance; how much sugar is allowed isn't clear, so ask the dietitian. See the 'Diet' section for the full day plan.",
      terms: ["exchange"]
    },
    {
      id: "cmc-fibroscan",
      title: "FibroScan (Liver Elastography)",
      hospital: "CMC Vellore — Hepatology",
      date: "2026-06-04",
      category: "Liver",
      doctor: "Dr. Asisha Janeela M. · Dr. Ashish Goel",
      pages: [12, 13],
      keyFindings: [
        "Liver stiffness (E) 4.3 kPa: 'significant liver fibrosis is unlikely' (report cut-off <6 kPa)",
        "CAP 231 dB/m: 'Does not suggest hepatic steatosis' (report cut-off >275)",
        "Recommendation: serial monitoring"
      ],
      plain: "A painless ultrasound-style test that measures how <b>stiff</b> the liver is (stiffness means scarring) and how <b>fatty</b> it is. The report says <b>significant scarring is unlikely</b> and it <b>does not suggest fatty liver</b>. Together with the negative Hepatitis C virus test, this is reassuring. Repeat occasionally as advised.",
      terms: ["fibroscan", "hcv"]
    }
  ],

  // ---------------------------------------------------------------------------
  // CONDITIONS
  // status: "active" | "monitoring" | "resolved" | "incidental"
  // ---------------------------------------------------------------------------
  conditions: [
    {
      name: "Stroke: left lateral medullary infarct",
      status: "active",
      statusLabel: "Recovering · prevent a second one",
      since: "5 Apr 2026",
      what: "A small stroke in the left side of the lowest part of the brainstem, from blockage of a tiny artery (small vessel disease).",
      now: "Mild left eyelid droop and 10–20% reduced feeling on the right side (June). Full strength 5/5; gait described as antalgic (pain-related).",
      plan: "Aspirin 75 mg + atorvastatin as prescribed, BP and cholesterol control, physio/OT, review in ~Dec 2026.",
      docs: ["cmc-discharge", "bsh-mri"]
    },
    {
      name: "Small vessel disease (old silent strokes, white-matter changes)",
      status: "monitoring",
      statusLabel: "Long-term · risk-factor control",
      since: "seen on CT/MRI Apr 2026",
      what: "Years of wear on the brain's tiny arteries, the same process that caused this stroke.",
      now: "No symptoms of its own.",
      plan: "Same as above: BP, cholesterol, no smoking, activity, diet.",
      docs: ["bsh-er", "bsh-mri"]
    },
    {
      name: "Possible brain aneurysm (2.2 mm)",
      status: "resolved",
      statusLabel: "Not seen on CT angiogram (per CMC)",
      since: "MRA Apr 2026",
      what: "The Dhaka MRA suggested a tiny bulge on the anterior communicating artery.",
      now: "CMC's summary says a CT cerebral angiogram 'did not demonstrate any aneurysmal dilatation' (reassuring; very small aneurysms can be hard to see on CT angiography).",
      plan: "Ask at review whether any repeat imaging is ever needed (and get a copy of the CT angiogram report).",
      docs: ["bsh-mri", "cmc-discharge"]
    },
    {
      name: "High blood pressure",
      status: "active",
      statusLabel: "Long-term · control",
      since: "~15 years",
      what: "Listed on the CMC diagnosis; 'known case for 15 years, on regular treatment'. In general the main driver of small vessel disease.",
      now: "BP 130/70 (Apr), 114/70 (Jun).",
      plan: "Check BP regularly at home and log it here. Confirm which BP tablet she takes (none is listed on the CMC discharge sheet).",
      docs: ["cmc-discharge"]
    },
    {
      name: "High cholesterol (dyslipidaemia)",
      status: "active",
      statusLabel: "Treated",
      since: "known",
      what: "LDL 162, triglycerides 235 in April.",
      now: "On atorvastatin 10 mg (on the CMC discharge list; the summary says she was 'managed with antiplatelet therapy, statins').",
      plan: "Repeat the lipid profile and ask what LDL target the doctors want.",
      docs: ["bsh-labs"]
    },
    {
      name: "Osteoporosis (spine) / osteopenia (hip, forearm)",
      status: "active",
      statusLabel: "HIGH spine fracture risk · drip not given yet",
      since: "on treatment since 2019",
      what: "Thin, fragile bones that break more easily. A T-score of −2.5 or lower counts as osteoporosis; her spine is −3.4, and the report says fracture risk is HIGH.",
      now: "Vitamin D slightly below the lab's range (27 ng/ml; lab wants >30).",
      plan: "Zoledronic acid drip (advised by CMC, NOT given yet as of 15 Nov 2026), calcium (Shelcal), vitamin D (Calcirol), fall prevention.",
      docs: ["cmc-dexa", "cmc-discharge"]
    },
    {
      name: "Hepatitis C antibody positive, virus not detected",
      status: "monitoring",
      statusLabel: "No treatment needed",
      since: "2019",
      what: "A positive antibody means past exposure (or, when weakly positive, sometimes a false positive). The virus test (PCR) is negative, so there is no active infection.",
      now: "Liver blood tests normal; FibroScan says significant liver scarring is unlikely; AFP (liver cancer screening marker) normal.",
      plan: "OPD follow-up advised; the FibroScan report recommends 'Serial Monitoring'.",
      docs: ["cmc-fibroscan", "cmc-usg", "cmc-discharge"]
    },
    {
      name: "Liver: enlarged, mildly coarse on ultrasound",
      status: "monitoring",
      statusLabel: "Monitor",
      since: "Apr 2026",
      what: "Ultrasounds showed an enlarged liver (fatty in Dhaka, coarse at CMC).",
      now: "CMC ultrasound conclusion: 'early features of chronic liver disease'. But the FibroScan two days later said significant scarring is unlikely and found no fatty liver.",
      plan: "Serial monitoring (as advised); hepatology OPD follow-up.",
      docs: ["bsh-usg", "cmc-usg", "cmc-fibroscan"]
    },
    {
      name: "Irritable bowel syndrome (probable)",
      status: "monitoring",
      statusLabel: "Symptom control",
      since: "~10 years",
      what: "Alternating constipation and diarrhoea.",
      now: "Stool calprotectin negative (no gut inflammation). Repeat colonoscopy not advised.",
      plan: "Repeat colonoscopy not advised. Naturolax (isabgol) is on her discharge list; the summary doesn't state its reason.",
      docs: ["cmc-discharge"]
    },
    {
      name: "Joint and body pains, tingling (degenerative)",
      status: "active",
      statusLabel: "Symptom control",
      since: "long-standing",
      what: "Considered more likely due to wear-and-tear arthritis (knees) and spine disease. RF negative makes rheumatoid arthritis less likely.",
      now: "Walks with a pain-related (antalgic) gait.",
      plan: "Physiotherapy, OT with Jacobson's relaxation, pregabalin 75 mg twice daily, duloxetine.",
      docs: ["cmc-discharge"]
    },
    {
      name: "Anxiety & sleep disturbance",
      status: "active",
      statusLabel: "Treated",
      since: "known",
      what: "Psychiatry felt this is related to stress, not a major psychiatric disorder.",
      now: "Sertraline started at CMC.",
      plan: "Outpatient follow-up as needed.",
      docs: ["cmc-discharge"]
    },
    {
      name: "Mild anaemia",
      status: "monitoring",
      statusLabel: "Ask doctor",
      since: "Apr 2026",
      what: "Haemoglobin 11.1 (Apr, below BSH range 11.5–15) and 11.0 (May, at the bottom of CMC's range 11–15). B12 and folate normal.",
      now: "The discharge summary calls routine blood tests within normal limits; anaemia is not discussed.",
      plan: "Ask whether iron studies are needed, especially since she takes aspirin.",
      docs: ["bsh-labs", "cmc-discharge"]
    },
    {
      name: "Borderline blood sugar",
      status: "monitoring",
      statusLabel: "Watch",
      since: "May 2026",
      what: "HbA1c 5.3% in April, 5.7% in May (5.7 is the very start of the 'prediabetes' range on US cut-offs; UK guidance starts at 6.0%).",
      now: "No diabetes.",
      plan: "Diet and weight loss; recheck HbA1c periodically.",
      docs: ["bsh-labs", "cmc-discharge"]
    },
    {
      name: "Incidental findings (no action advised in the reports)",
      status: "incidental",
      statusLabel: "Background findings",
      since: "",
      what: "Empty sella (pituitary pocket; ask if hormone tests are needed) · left PCA artery mildly thin ('normal variant') · left kidney low in the pelvis and malrotated (size described as both normal and 'shrunken') · mild sinusitis / nasal turbinate.",
      now: "",
      plan: "Mention the pelvic kidney to any doctor doing abdominal scans or surgery.",
      docs: ["bsh-mri", "bsh-usg", "cmc-usg"]
    }
  ],

  // ---------------------------------------------------------------------------
  // MEDICINES (from CMC discharge 5 Jun 2026)
  // ---------------------------------------------------------------------------
  medicines: [
    { name: "Aspirin", dose: "75 mg", when: "Once daily, afternoon", purpose: "Blood thinner (antiplatelet). Stops platelets clumping, which lowers the risk of another stroke.", note: "Stroke-prevention medicine prescribed by CMC. Don't stop without a doctor's advice. CMC lists bleeding gums or blood in stools as warning signs." , group: "Stroke prevention"},
    { name: "Atorvastatin", dose: "10 mg", when: "Once daily, night", purpose: "Lowers cholesterol (LDL); can help prevent heart attack and stroke in people with blood-vessel disease (NHS).", note: "Report unexplained muscle pain.", group: "Stroke prevention" },
    { name: "Sertraline", dose: "25 mg", when: "Once daily, morning", purpose: "For anxiety and mood (an SSRI). Started at CMC by Psychiatry.", note: "In general takes a few weeks to work fully.", group: "Mind & pain" },
    { name: "Duloxetine", dose: "20 mg", when: "Once daily", purpose: "An SNRI; in general used for chronic pain and tingling, and for mood. The discharge summary doesn't state the reason.", note: "", group: "Mind & pain" },
    { name: "Pregabalin", dose: "75 mg", when: "Twice daily", purpose: "Nerve-type pain and tingling. Rheumatology wrote 'continuation of pregabalin 75 mg twice daily', so she may have been taking it before CMC.", note: "In general can cause drowsiness or dizziness; take care to prevent falls (she has osteoporosis).", group: "Mind & pain" },
    { name: "Mego-XL", dose: "1", when: "Once daily", purpose: "Nerve vitamins. Pharmacy listings show methylcobalamin (B12) + alpha-lipoic acid + vitamin B6 + folic acid.", note: "Composition from pharmacy listings; check the pack.", group: "Supplements" },
    { name: "Shelcal", dose: "500 mg", when: "Once daily", purpose: "Calcium + vitamin D3 for bones (pharmacy listings: 500 mg elemental calcium + vitamin D3 250 IU).", note: "", group: "Bones" },
    { name: "Calcirol", dose: "60,000 IU", when: "Weekly × 6 weeks, then monthly × 6 months", purpose: "High-dose vitamin D3. Her level was slightly below the lab's range (27; lab wants >30).", note: "Weekly part ≈ until mid-July 2026; monthly ≈ until Jan 2027.", group: "Bones" },
    { name: "Zoledronic acid (IV drip)", dose: "4 mg in 100 ml NS over 1 hr", when: "To be given at their hometown 'as per protocol' (frequency not stated; status unknown)", purpose: "Strengthens bones and cuts fracture risk. The usual osteoporosis dose is 5 mg once a year, so confirm the 4 mg dose with the doctor. Pre-medicines: Inj. Avil, Inj. Hydrocortisone 100 mg, Tab. Paracetamol 1 g.", note: "CMC: mild fever with muscle aches may persist 2–3 days; paracetamol 1 g as needed (max 3 g/day, 6 h apart). Record the date given.", group: "Bones" },
    { name: "Pantoprazole", dose: "40 mg", when: "Once daily", purpose: "Reduces stomach acid (in general often given to protect the stomach alongside aspirin; reason not stated).", note: "In general taken before breakfast; confirm with the pharmacist.", group: "Stomach & bowel" },
    { name: "Naturolax powder", dose: "1 tablespoon in a glass of water", when: "Twice daily", purpose: "Isabgol (psyllium husk) fibre, which softens and bulks up stools. The discharge summary doesn't say why it was prescribed (her bowel problems were labelled probable IBS).", note: "Drink plenty of water with it.", group: "Stomach & bowel" }
  ],
  previousMedicines: [
    { name: "Fluoxetine 20 mg", note: "Before CMC. Not on the discharge list; sertraline appears to replace it. Confirm it was stopped." },
    { name: "Quetiapine 25 mg at bedtime", note: "Before CMC. Not on the discharge list. Confirm." },
    { name: "Betahistine", note: "Used intermittently for vertigo." },
    { name: "Osteoporosis treatment since 2019", note: "History says 'on treatment since 2019', but the medicine isn't named. Confirm." },
    { name: "Blood pressure tablet(s)", note: "'On regular treatment for 15 years', but no BP tablet is named on the CMC discharge list. Confirm what she is taking." }
  ],

  // ---------------------------------------------------------------------------
  // LAB VALUES  (value null = not tested)
  // ---------------------------------------------------------------------------
  labDates: [
    { key: "apr", label: "5 Apr 2026", where: "BSH Dhaka", short: "Dhaka · Apr" },
    { key: "jun", label: "29 May–3 Jun 2026", where: "CMC Vellore", short: "CMC · May–Jun" }
  ],
  labs: [
    { group: "Blood count", name: "Haemoglobin", unit: "g/dL", ref: "BSH 11.5–15 · CMC 11–15 (F)", apr: 11.1, jun: 11.0, flag: "low", flags: { jun: "borderline" }, explain: "Carries oxygen. April was slightly below BSH's range; May is at the bottom of CMC's range." },
    { group: "Blood count", name: "ESR", unit: "mm/hr", ref: "BSH < 20 (F) · CMC no range printed", apr: 48, jun: 47, flag: "high", explain: "Non-specific inflammation marker. Can run higher with age and anaemia; cause not stated. CMC's summary calls inflammatory markers normal." },
    { group: "Blood count", name: "Red blood cells", unit: "×10¹²/L", ref: "BSH 4–5.5 · CMC 3.8–5.2 (F)", apr: 3.76, jun: 3.68, flag: "low", explain: "" },
    { group: "Blood count", name: "Haematocrit (PCV)", unit: "%", ref: "BSH 37–47 · CMC 35–46 (F)", apr: 34.4, jun: 32.9, flag: "low", explain: "" },
    { group: "Blood count", name: "White blood cells", unit: "×10⁹/L", ref: "CMC 4–12", apr: 10.0, jun: 10.2, flag: "", explain: "Infection-fighting cells. Within range." },
    { group: "Blood count", name: "Platelets", unit: "×10⁹/L", ref: "150–450", apr: 250, jun: 219, flag: "", explain: "" },
    { group: "Sugar", name: "HbA1c", unit: "%", ref: "< 5.7 normal", apr: 5.3, jun: 5.7, flag: "borderline", explain: "3-month average sugar. 5.7 = start of the prediabetes range on US cut-offs (UK starts at 6.0)." },
    { group: "Sugar", name: "Random blood sugar", unit: "mmol/L", ref: "< 7.8", apr: 5.0, jun: null, flag: "", explain: "" },
    { group: "Cholesterol", name: "Total cholesterol", unit: "mg/dL", ref: "BSH: High > 239", apr: 251, jun: null, flag: "high", explain: "" },
    { group: "Cholesterol", name: "LDL ('bad')", unit: "mg/dL", ref: "< 100 optimal", apr: 162, jun: null, flag: "high", explain: "The main target of the statin. Needs a recheck on treatment." },
    { group: "Cholesterol", name: "HDL ('good')", unit: "mg/dL", ref: "> 40 (BSH)", apr: 41, jun: null, flag: "borderline", explain: "Just above the lab's cut-off; for women, under 50 is often considered low." },
    { group: "Cholesterol", name: "Triglycerides", unit: "mg/dL", ref: "BSH: High 200–499", apr: 235, jun: null, flag: "high", explain: "Blood fats; improved by less sugar/oil and weight loss." },
    { group: "Kidney & salts", name: "Creatinine", unit: "mg/dL", ref: "BSH 0.6–1.3 · CMC 0.5–1.4", apr: 0.7, jun: 1.0, flag: "", explain: "Kidney function. Within range both times, but it rose from 0.7 to 1.0. Ask about eGFR, given the small left kidney and before the zoledronic drip." },
    { group: "Kidney & salts", name: "Sodium", unit: "mmol/L", ref: "BSH 136–148", apr: 136, jun: 136, flag: "", explain: "" },
    { group: "Kidney & salts", name: "Potassium", unit: "mmol/L", ref: "BSH 3.5–5.2", apr: 3.7, jun: 4.7, flag: "", explain: "" },
    { group: "Kidney & salts", name: "Uric acid", unit: "mg/dL", ref: "2.4–5.7", apr: 3.4, jun: null, flag: "", explain: "" },
    { group: "Liver", name: "ALT (SGPT)", unit: "U/L", ref: "< 41", apr: null, jun: 21, flag: "", explain: "Liver enzyme. Normal." },
    { group: "Liver", name: "AST (SGOT)", unit: "U/L", ref: "< 40", apr: null, jun: 27, flag: "", explain: "" },
    { group: "Liver", name: "Albumin", unit: "g/dL", ref: "3.5–5.0", apr: null, jun: 4.2, flag: "", explain: "" },
    { group: "Liver", name: "Bilirubin (total)", unit: "mg/dL", ref: "< 1.2", apr: null, jun: 0.2, flag: "", explain: "" },
    { group: "Liver", name: "AFP", unit: "IU/ml", ref: "0–6.7", apr: null, jun: 2.4, flag: "", explain: "Screening marker for liver cancer. Normal." },
    { group: "Liver", name: "Hepatitis C virus PCR", unit: "", ref: "Negative", apr: null, jun: "Negative", flag: "good", explain: "No active Hepatitis C virus in the blood." },
    { group: "Bones & vitamins", name: "Vitamin D (25-OH)", unit: "ng/ml", ref: "> 30", apr: null, jun: 27.0, flag: "borderline", explain: "Below the lab's range (20–30 is often called 'insufficient'); Calcirol was prescribed." },
    { group: "Bones & vitamins", name: "Calcium", unit: "mg/dL", ref: "8.3–10.4", apr: null, jun: 9.04, flag: "", explain: "" },
    { group: "Bones & vitamins", name: "Vitamin B12", unit: "pg/ml", ref: "197–771", apr: null, jun: 529, flag: "", explain: "" },
    { group: "Bones & vitamins", name: "Folic acid", unit: "ng/ml", ref: "3.9–26.8", apr: null, jun: 16.5, flag: "", explain: "" },
    { group: "Other", name: "TSH (thyroid)", unit: "µIU/ml", ref: "0.3–4.5", apr: null, jun: 0.772, flag: "", explain: "Thyroid normal." },
    { group: "Other", name: "CRP", unit: "mg/L", ref: "< 6", apr: null, jun: 6.41, flag: "borderline", explain: "Inflammation marker, just above normal." },
    { group: "Other", name: "Rheumatoid factor", unit: "IU/ml", ref: "< 20", apr: null, jun: "< 9.25", flag: "", explain: "Negative, which makes rheumatoid arthritis less likely." },
    { group: "Other", name: "INR", unit: "", ref: "PT 11.7–16.1 s", apr: null, jun: 1.25, flag: "", explain: "Blood clotting time. PT 15.8 s was within the printed range." }
  ],

  // ---------------------------------------------------------------------------
  // DIET (from CMC booklet)
  // ---------------------------------------------------------------------------
  diet: {
    headline: "1300 kcal · weight-reducing · salt-restricted",
    targets: ["Salt for cooking: 5 g/day (1 tsp)", "Oil for cooking: 10 g/day (written as 1 tsp sunflower + 2 tsp mustard; note 3 tsp is usually more than 10 g, so ask)", "Sugar: crossed out on the avoid list and handwritten beside the salt line; ask the dietitian how much is allowed", "'Desirable weight' written in the booklet: 42–46 kg (she was 62 kg). Ask the doctor what a safe, realistic goal is."],
    day: [
      { time: "6:00 AM", meal: "Early morning", food: "Tea with 100 ml skim milk, or plain tea" },
      { time: "8:00 AM", meal: "Breakfast", food: "2 chapatis + 15 g chola or 35 g skim paneer, OR 50 g moodi + 15 g chola · ½ cup vegetable curry" },
      { time: "10:00 AM", meal: "Mid-morning", food: "1 fruit exchange (e.g. 1 small apple, 1 guava, 1 orange, 2″×3″ papaya)" },
      { time: "12:30 PM", meal: "Lunch", food: "1 cup cooked rice OR 2 rotis · ½ cup each of two vegetables · fish/skinless chicken 75 g OR dal 25 g OR skim curd 100 ml + dal 15 g" },
      { time: "4:30 PM", meal: "Tea time", food: "Tea with 100 ml skim milk · 25 g sprouted/boiled whole gram OR 15 g peanuts (~30) OR 10–12 almonds" },
      { time: "8:00 PM", meal: "Dinner", food: "2 rotis · two vegetables · fish/chicken 75 g OR skim paneer 35 g OR dal 25 g" },
      { time: "9:30 PM", meal: "Bedtime", food: "200 ml skim milk" }
    ],
    avoid: ["Mutton, beef, pork", "Prawn, crab, shellfish", "Egg yolk (whites are OK)", "Ghee, butter, cheese, vanaspati, margarine", "All salted foods (handwritten)", "Glucose, honey, syrup, jaggery, sweets, halwa, burfi, raisins (printed; sugar itself is crossed out)", "Cakes, pastries, candy, fried foods", "Soft drinks, Horlicks/Bournvita, chocolate, alcohol", "Dried fruits, jam, preserved fruits"],
    free: ["Clear soups", "Lemon water without sugar", "Plain tea or coffee", "Skimmed buttermilk", "Raw salads", "Spices: onion, mint, pepper, garlic, curry leaf, coriander, vinegar, mustard"],
    lowCalVeg: "Cabbage, cauliflower, spinach, lettuce, white radish, ash gourd (chal kumro), bitter gourd (korola), brinjal (begun), tomato, cucumber, drumstick (sajne), ladies finger (dherosh), french beans, capsicum, potol, olkopi, green papaya, mocha, pumpkin (kumro), jhinge, chichinga, methi"
  },

  // ---------------------------------------------------------------------------
  // QUESTIONS FOR THE DOCTOR / things that don't match between reports
  // ---------------------------------------------------------------------------
  questions: [
    { topic: "Stroke location (most important)", text: "The written Dhaka MRI report says 'The posterior fossa, brain stem and CP angles are normal' (and the CT says 'Brain stem and cerebellum unremarkable'), but CMC's summary says the MRI demonstrated a left medullary infarct. Did CMC review the MRI images themselves, or base the diagnosis on her symptoms? Should we keep the MRI CD safe for future comparison?", docs: ["bsh-mri", "cmc-discharge"] },
    { topic: "Weakness", text: "The Dhaka ER note says 'left-sided weakness', but CMC found full strength and only right-sided numbness. Was there ever real weakness, or was the ER note inaccurate?", docs: ["bsh-er", "cmc-discharge"] },
    { topic: "Aneurysm", text: "The CT angiogram mentioned in CMC's summary did not show the 2.2 mm aneurysm seen on the Dhaka MRA. Can we get a copy of that report? Since very small aneurysms can be hard to see on CT angiography, is any repeat scan ever needed?", docs: ["bsh-mri", "cmc-discharge"] },
    { topic: "Blood pressure tablets", text: "Her BP medicine isn't on the CMC discharge list. Which BP tablet and dose should she be on, and what BP target should we aim for at home?", docs: ["cmc-discharge"] },
    { topic: "Cholesterol target", text: "LDL was 162 before treatment. When should we recheck the lipid profile, and what LDL target do you want? Is atorvastatin 10 mg enough?", docs: ["bsh-labs"] },
    { topic: "Old medicines", text: "Should fluoxetine and quetiapine be fully stopped now that she takes sertraline + duloxetine? (She was on them before CMC.) Was she already on pregabalin, and which osteoporosis medicine had she taken since 2019?", docs: ["cmc-discharge"] },
    { topic: "Medicine combination", text: "She takes aspirin together with sertraline and duloxetine (and pregabalin). Is there anything to watch for, e.g. bleeding, low sodium, serotonin-related side effects, or drowsiness and falls? Is pantoprazole meant to be long-term?", docs: ["cmc-discharge"] },
    { topic: "Pregabalin at her age", text: "The NHS leaflet says pregabalin 'might not be suitable for people older than 65'. She is 70 and also takes sertraline and duloxetine, which can cause dizziness. Is 75 mg twice daily still right for her, given her fall and fracture risk? (Don't stop it suddenly.)", docs: ["cmc-discharge"] },
    { topic: "Zoledronic acid (urgent: not given yet)", text: "The drip has NOT been given yet, and her spine fracture risk is high. Can it be arranged soon? The discharge sheet says 4 mg; the usual osteoporosis dose is 5 mg once a year. Please confirm the intended dose and how often to repeat it. Her creatinine rose from 0.7 to 1.0 and the left kidney 'appears shrunken': is a kidney function (eGFR) check needed first? Does she need a dental check or vitamin D top-up beforehand?", docs: ["cmc-discharge", "cmc-dexa"] },
    { topic: "Heart echo", text: "Dhaka's echo said grade II diastolic dysfunction + mild pulmonary hypertension; CMC's echo said grade I with mild valve leaks and no pulmonary hypertension mentioned, and the discharge summary calls it normal. Is any heart follow-up needed?", docs: ["bsh-echo", "cmc-echo"] },
    { topic: "Anaemia", text: "Haemoglobin is ~11 (mildly low). Should iron levels be checked, especially while she is on aspirin?", docs: ["bsh-labs"] },
    { topic: "Liver", text: "How often should the FibroScan/ultrasound be repeated, and with which doctor (hepatology OPD)?", docs: ["cmc-fibroscan", "cmc-usg"] },
    { topic: "Kidney", text: "CMC's ultrasound says the left kidney is 'normal in size (7.2 cm)' in the findings but 'appears shrunken' in the impression. Which is right, and does it need follow-up?", docs: ["cmc-usg", "bsh-usg"] },
    { topic: "Diet: sugar and weight", text: "Sugar is crossed out on the avoid list and 'Sugar' is written beside the 5 g salt line. How much sugar is allowed? Is the 42–46 kg 'desirable weight' a realistic target for her?", docs: ["cmc-diet"] },
    { topic: "Recovery", text: "Will the eyelid droop and the right-side numbness improve? What exercises help most?", docs: ["cmc-discharge"] }
  ],

  // Things we still don't have — shown as a checklist
  missing: [
    "CMC CT cerebral angiography report (mentioned in the discharge summary, not in the scans)",
    "Prof. Narayan Chandra Kundu's prescription/notes from Dhaka (April)",
    "Anything from 6 Apr – 28 May (any other hospital she went to? medicines?)",
    "Zoledronic acid drip: not given yet (15 Nov 2026). Record the date when it is given",
    "Any reports or check-ups after 5 Jun 2026",
    "Physiotherapy home-programme pamphlet",
    "Current BP medicine name and dose"
  ],

  emergency: {
    cmcHelpline: "92800 43437 (24×7)",
    cmcAmbulance: "97919 79797 / 0416 228 2280 (Vellore & Ranipet only)",
    signs: [
      "Any NEW weakness",
      "Sudden, severe headache",
      "Blackouts or seizures (fits)",
      "Any bleeding from the gums, or blood in stools",
      "CMC also says: contact the nearest physician for fever, rash, vomiting, drowsiness, seizures, headache, weakness or numbness",
      "Sudden trouble speaking, seeing, swallowing, or walking/balance (general stroke warning signs)"
    ]
  },

  // ---------------------------------------------------------------------------
  // PROGRESS LOG — add home readings / check-ups here over time
  // { date: "2026-11-20", bp: "128/76", pulse: 70, weightKg: 60.5, note: "..." }
  // ---------------------------------------------------------------------------
  progress: [
    { date: "2026-04-05", bp: "130/70", pulse: 66, weightKg: null, note: "BSH Emergency, day of stroke", source: "bsh-er" },
    { date: "2026-06-01", bp: "114/70", pulse: 88, weightKg: 62, note: "CMC admission", source: "cmc-discharge" }
  ],

  // ---------------------------------------------------------------------------
  // GLOSSARY
  // ---------------------------------------------------------------------------
  glossary: {
    "lateral-medullary": ["Lateral medullary infarct (Wallenberg syndrome)", "A stroke in the outer side of the medulla, the lowest part of the brainstem. Typical signs: drooping eyelid on the same side, loss of pain/temperature feeling on the opposite side of the body, slurred speech, and often dizziness, unsteadiness or swallowing trouble."],
    "horner": ["Horner syndrome", "Drooping upper eyelid (and a smaller pupil) caused by damage to a nerve pathway that passes through the brainstem. CMC wrote her eyelid droop is 'suggestive of probable Horner syndrome'."],
    "ptosis": ["Ptosis", "Drooping of the upper eyelid."],
    "toast": ["TOAST classification", "A standard way doctors classify the cause of a stroke: large artery, heart clot, small vessel, other, or unknown. Hers is 'small vessel disease'."],
    "small-vessel": ["Small vessel disease", "Damage to the tiny arteries deep in the brain, mainly from long-term high blood pressure and age; diabetes, smoking and cholesterol add to it. Causes small 'lacunar' strokes."],
    "lacunar": ["Lacunar infarct", "A small stroke (under ~15 mm) deep in the brain, caused by blockage of one tiny artery. 'Chronic' = old. Many are 'silent' with no noticeable symptoms."],
    "capsuloganglionic": ["Capsuloganglionic region", "A deep area of the brain (internal capsule + basal ganglia) where lacunar strokes are common."],
    "lentiform": ["Lentiform nucleus", "Part of the basal ganglia, deep in the brain. Her old tiny stroke is here."],
    "hypodense": ["Hypodense (CT)", "An area that looks darker on CT; in the brain it often means old damage or fluid."],
    "atrophy": ["Atrophy", "Shrinkage. Mild brain atrophy is common with age."],
    "white-matter": ["White-matter ischaemic change", "Patchy damage in the brain's 'wiring' from reduced blood flow in small vessels. Very common with age and high BP."],
    "flair": ["T2 / FLAIR", "MRI picture types that show damaged or watery tissue as bright."],
    "dwi": ["DWI (diffusion)", "The MRI picture type that lights up NEW strokes, from minutes after they start until about 2 weeks later. A spot that isn't bright on DWI is usually old. But a normal DWI doesn't completely rule out a new stroke: very small brainstem strokes can be missed, especially in the first day."],
    "empty-sella": ["Empty sella", "The bony pocket for the pituitary gland looks filled with fluid and the gland flattened. Usually harmless and found by chance; occasionally doctors check hormone levels."],
    "aneurysm": ["Saccular aneurysm", "A small berry-like bulge on an artery wall. Hers was 'suggested' on the MRA but not demonstrated on the CT angiogram reported by CMC."],
    "acoma": ["AComA", "Anterior communicating artery: a short artery at the front of the brain connecting the left and right sides."],
    "pca": ["PCA", "Posterior cerebral artery: the artery supplying the back of the brain. Hers is described as mildly hypoplastic (naturally thinner), a normal variant."],
    "dsa": ["DSA", "Digital subtraction angiography: a catheter X-ray test of brain arteries. Recommended 'if needed'; CMC used a CT angiogram instead."],
    "mra": ["MRA", "MR angiography: an MRI picture of the blood vessels. It can be done with or without a dye injection; her Dhaka scan says 'Non contrast scan' (no dye)."],
    "gcs": ["GCS 15/15", "Glasgow Coma Scale. 15 is fully alert and normal."],
    "ldl": ["LDL cholesterol", "'Bad' cholesterol that builds up in arteries. After a stroke doctors usually want it much lower."],
    "hdl": ["HDL cholesterol", "'Good' cholesterol; higher is generally better."],
    "hba1c": ["HbA1c", "Average blood sugar over ~3 months. <5.7% normal, 5.7–6.4% prediabetes, ≥6.5% diabetes (US cut-offs; UK guidance counts prediabetes from 6.0%). Anaemia can affect the result."],
    "esr": ["ESR", "A non-specific blood test for inflammation."],
    "hb": ["Haemoglobin (Hb)", "The oxygen-carrying protein in red blood cells. Low = anaemia."],
    "echo": ["Echocardiogram", "Ultrasound of the heart showing its pumping and valves. It can sometimes show clots, but a normal echo can't fully rule them out."],
    "ef": ["Ejection fraction (EF)", "The percentage of blood in the main pumping chamber pushed out with each beat. About 50–70% is normal (sources vary slightly)."],
    "diastolic": ["Diastolic dysfunction (grades I, II, III)", "The heart muscle is stiff and relaxes slowly between beats, so the heart fills with blood less easily. Its pumping strength can still be normal. Echo reports grade it with Roman numerals: Grade I (1) = mild, very common with age and high blood pressure; Grade II (2) = moderate, with raised filling pressure inside the heart; Grade III (3) = severe. Her Dhaka echo (Apr) said grade II; CMC's echo 2 months later said grade I. Her pumping was normal on both (EF 62% and 60.5%). Ask her doctor what this means for her; it is on the 'For the doctor' list."],
    "lvh": ["Concentric LV hypertrophy", "Thickening of the main pumping chamber's wall, usually from long-term high BP."],
    "mr": ["Mitral / aortic / tricuspid regurgitation", "A backward leak through a heart valve (MR = mitral, AR = aortic, TR = tricuspid). 'Trace' or 'mild' leaks are common and usually harmless."],
    "mac": ["MAC", "Mitral annular calcification: calcium deposit on the ring of the mitral valve, common with age."],
    "pah": ["Pulmonary hypertension", "Raised pressure in the lung arteries. 'Mild' on the Dhaka echo; not mentioned on the later CMC echo."],
    "ecg": ["ECG", "A recording of the heart's electrical rhythm."],
    "af": ["Atrial fibrillation", "An irregular heart rhythm that can throw clots to the brain. It was not seen on her two ECGs (a short ECG can miss AF that comes and goes)."],
    "carotid": ["Carotid / vertebral arteries", "The main arteries in the neck supplying the brain. CMC's Doppler: no plaques, 'Normal study'."],
    "imt": ["IMT", "Intima-media thickness: thickness of the inner lining of the neck artery wall. It thickens with age; above about 0.9 mm is generally counted as thickened. Hers was 0.6–0.7 mm."],
    "dexa": ["DEXA scan", "Low-dose X-ray that measures bone mineral density."],
    "t-score": ["T-score", "Bone density compared with a young healthy adult. ≥ −1 normal; −1 to −2.5 osteopenia; ≤ −2.5 osteoporosis."],
    "osteoporosis": ["Osteoporosis", "Thin, fragile bones with high fracture risk."],
    "osteopenia": ["Osteopenia", "Bones thinner than normal, but not yet osteoporosis."],
    "zoledronic": ["Zoledronic acid", "A bisphosphonate drip that slows bone loss and reduces fractures; for osteoporosis it is usually given as 5 mg once a year (or less often)."],
    "fibroscan": ["FibroScan", "A quick ultrasound-style test measuring liver stiffness (kPa → scarring) and fat (CAP)."],
    "hcv": ["Hepatitis C (HCV) antibody vs PCR", "Antibody positive = exposure at some point (a weak positive can sometimes be false). PCR (RNA) negative = no virus now. She is PCR negative."],
    "fatty-liver": ["Fatty liver", "Extra fat in the liver, linked to weight and diet. CMC's FibroScan did not find significant fat."],
    "chronic-liver": ["Coarse liver echotexture", "An ultrasound appearance that can be an early sign of liver change; checked further with FibroScan (significant scarring unlikely)."],
    "pelvic-kidney": ["Ectopic / pelvic kidney", "A kidney that settled low in the pelvis before birth instead of moving up. Often causes no problems."],
    "antiplatelet": ["Antiplatelet", "A medicine (like aspirin) that makes platelets less sticky to prevent clots."],
    "statin": ["Statin", "A cholesterol-lowering medicine (atorvastatin) that also helps stabilise fatty deposits (plaque) in artery walls."],
    "exchange": ["Food 'exchange'", "A fixed portion with similar calories, so foods can be swapped. E.g. 1 cereal exchange = ½ cup cooked rice = 1 roti."]
  }
};
