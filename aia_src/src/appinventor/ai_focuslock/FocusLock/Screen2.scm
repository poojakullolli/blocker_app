#|
$JSON
{"authURL":["ai2.appinventor.mit.edu"],"YaVersion":"226","Source":"Form","Properties":{"$Name":"Screen2","$Type":"Form","$Version":"31","AppName":"FocusLock","BackgroundColor":"&HFF0D0D0D","ScreenOrientation":"portrait","Scrollable":"False","ShowStatusBar":"False","TitleVisible":"False","Title":"FocusLock - Focus Active","Theme":"AppTheme.Dark","$Components":[
  {"$Name":"VerticalArrangement_Block","$Type":"VerticalArrangement","$Version":"4","AlignHorizontal":"3","AlignVertical":"2","BackgroundColor":"&HFF0D0D0D","Height":"-2","Width":"-2","$Components":[
    {"$Name":"LabelBlockIcon","$Type":"Label","$Version":"6","FontSize":"72","Text":"🔒","TextAlignment":"1","Width":"-2"},
    {"$Name":"LabelBlockTitle","$Type":"Label","$Version":"6","FontBold":"True","FontSize":"28","Text":"App Blocked","TextColor":"&HFFE94560","TextAlignment":"1","Width":"-2"},
    {"$Name":"LabelBlockMsg","$Type":"Label","$Version":"6","FontSize":"18","Text":"This app is blocked.\nStay focused! 💪","TextColor":"&HFFCCD6F6","TextAlignment":"1","Width":"-2"},
    {"$Name":"LabelSpacer_B1","$Type":"Label","$Version":"6","Text":" ","Height":"30"},
    {"$Name":"LabelTimerDisplay","$Type":"Label","$Version":"6","FontBold":"True","FontSize":"42","Text":"1:00:00","TextColor":"&HFF64FFDA","TextAlignment":"1","Width":"-2"},
    {"$Name":"LabelTimerLabel","$Type":"Label","$Version":"6","FontSize":"14","Text":"Time Remaining","TextColor":"&HFF8892B0","TextAlignment":"1","Width":"-2"},
    {"$Name":"LabelSpacer_B2","$Type":"Label","$Version":"6","Text":" ","Height":"30"},
    {"$Name":"LabelMotivation","$Type":"Label","$Version":"6","FontItalic":"True","FontSize":"16","Text":"\"The secret of getting ahead\nis getting started.\"","TextColor":"&HFF8892B0","TextAlignment":"1","Width":"-2"},
    {"$Name":"LabelSpacer_B3","$Type":"Label","$Version":"6","Text":" ","Height":"50"},
    {"$Name":"ButtonHiddenUnlock","$Type":"Button","$Version":"7","BackgroundColor":"&HFF1A1A1A","FontSize":"10","Height":"30","Text":"···","TextColor":"&HFF2A2A2A","Width":"60"}
  ]},
  {"$Name":"TinyDB2","$Type":"TinyDB","$Version":"2","Namespace":"FocusLockDB"},
  {"$Name":"Clock2","$Type":"Clock","$Version":"3","TimerEnabled":"True","TimerInterval":"1000"},
  {"$Name":"Notifier2","$Type":"Notifier","$Version":"6","BackgroundColor":"&HFF16213E","NotifierLength":"1","TextColor":"&HFFE94560"}
]}}
|#
