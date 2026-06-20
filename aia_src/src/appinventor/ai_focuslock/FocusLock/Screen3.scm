#|
$JSON
{"authURL":["ai2.appinventor.mit.edu"],"YaVersion":"226","Source":"Form","Properties":{"$Name":"Screen3","$Type":"Form","$Version":"31","AppName":"FocusLock","BackgroundColor":"&HFF1A1A2E","ScreenOrientation":"portrait","Scrollable":"True","ShowStatusBar":"True","TitleVisible":"True","Title":"⚙ Settings","Theme":"AppTheme.Dark","$Components":[
  {"$Name":"VerticalArrangement_Settings","$Type":"VerticalArrangement","$Version":"4","AlignHorizontal":"1","AlignVertical":"1","BackgroundColor":"&HFF1A1A2E","Height":"-2","Width":"-2","$Components":[

    {"$Name":"LabelPinSection","$Type":"Label","$Version":"6","FontBold":"True","FontSize":"18","Text":"🔐  PIN Settings","TextColor":"&HFFE94560","Width":"-2"},
    {"$Name":"HorizontalArrangement_PIN","$Type":"HorizontalArrangement","$Version":"4","Height":"-1","Width":"-2","$Components":[
      {"$Name":"TextBoxCurrentPIN","$Type":"PasswordTextBox","$Version":"5","Hint":"Current PIN","Width":"-2","TextColor":"&HFFCCD6F6","BackgroundColor":"&HFF16213E"},
      {"$Name":"TextBoxNewPIN","$Type":"PasswordTextBox","$Version":"5","Hint":"New PIN","Width":"-2","TextColor":"&HFFCCD6F6","BackgroundColor":"&HFF16213E"},
      {"$Name":"ButtonChangePIN","$Type":"Button","$Version":"7","BackgroundColor":"&HFFE94560","FontBold":"True","Text":"Save PIN","TextColor":"&HFFFFFFFF","Width":"-1"}
    ]},
    {"$Name":"LabelPINFeedback","$Type":"Label","$Version":"6","FontSize":"13","Text":"","TextColor":"&HFF64FFDA","Width":"-2"},

    {"$Name":"LabelSpacer_S1","$Type":"Label","$Version":"6","Text":" ","Height":"20"},
    {"$Name":"LabelTimerSection","$Type":"Label","$Version":"6","FontBold":"True","FontSize":"18","Text":"⏱  Timer Settings","TextColor":"&HFFE94560","Width":"-2"},
    {"$Name":"HorizontalArrangement_Timer","$Type":"HorizontalArrangement","$Version":"4","Height":"-1","Width":"-2","$Components":[
      {"$Name":"TextBoxTimerMins","$Type":"TextBox","$Version":"7","Hint":"Minutes (e.g. 60)","NumbersOnly":"True","Width":"-2","TextColor":"&HFFCCD6F6","BackgroundColor":"&HFF16213E"},
      {"$Name":"ButtonSaveTimer","$Type":"Button","$Version":"7","BackgroundColor":"&HFFE94560","FontBold":"True","Text":"Set Timer","TextColor":"&HFFFFFFFF","Width":"-1"}
    ]},
    {"$Name":"CheckboxTimerEnabled","$Type":"CheckBox","$Version":"5","FontSize":"15","Text":"Enable countdown timer","TextColor":"&HFFCCD6F6"},
    {"$Name":"LabelTimerFeedback","$Type":"Label","$Version":"6","FontSize":"13","Text":"","TextColor":"&HFF64FFDA","Width":"-2"},

    {"$Name":"LabelSpacer_S2","$Type":"Label","$Version":"6","Text":" ","Height":"20"},
    {"$Name":"LabelAppsSection","$Type":"Label","$Version":"6","FontBold":"True","FontSize":"18","Text":"📱  Allowed Apps","TextColor":"&HFFE94560","Width":"-2"},
    {"$Name":"LabelAppsHint","$Type":"Label","$Version":"6","FontSize":"13","Text":"Add app names to whitelist (one at a time):","TextColor":"&HFF8892B0","Width":"-2"},
    {"$Name":"HorizontalArrangement_Apps","$Type":"HorizontalArrangement","$Version":"4","Height":"-1","Width":"-2","$Components":[
      {"$Name":"TextBoxAppName","$Type":"TextBox","$Version":"7","Hint":"e.g. Calculator","Width":"-2","TextColor":"&HFFCCD6F6","BackgroundColor":"&HFF16213E"},
      {"$Name":"ButtonAddApp","$Type":"Button","$Version":"7","BackgroundColor":"&HFF0F3460","FontBold":"True","Text":"+ Add","TextColor":"&HFFE94560","Width":"-1"}
    ]},
    {"$Name":"ListViewAllowedApps","$Type":"ListView","$Version":"5","BackgroundColor":"&HFF16213E","FontSize":"15","Height":"200","TextColor":"&HFFCCD6F6","Width":"-2"},
    {"$Name":"ButtonRemoveApp","$Type":"Button","$Version":"7","BackgroundColor":"&HFF2D0A0A","FontBold":"False","FontSize":"14","Text":"🗑 Remove Selected","TextColor":"&HFFE94560","Width":"-2"},

    {"$Name":"LabelSpacer_S3","$Type":"Label","$Version":"6","Text":" ","Height":"20"},
    {"$Name":"ButtonSaveAll","$Type":"Button","$Version":"7","BackgroundColor":"&HFF64FFDA","FontBold":"True","FontSize":"18","Height":"60","Text":"💾 Save All Settings","TextColor":"&HFF1A1A2E","Width":"-2"},
    {"$Name":"LabelSpacer_S4","$Type":"Label","$Version":"6","Text":" ","Height":"10"},
    {"$Name":"ButtonBack","$Type":"Button","$Version":"7","BackgroundColor":"&HFF0F3460","FontSize":"14","Text":"← Back to Home","TextColor":"&HFFCCD6F6","Width":"-2"}
  ]},
  {"$Name":"TinyDB3","$Type":"TinyDB","$Version":"2","Namespace":"FocusLockDB"},
  {"$Name":"Notifier3","$Type":"Notifier","$Version":"6","BackgroundColor":"&HFF16213E","TextColor":"&HFFE94560"}
]}}
|#
