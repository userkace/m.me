while True:
    username = str(input("\nInput messenger username > "))
    text = str(input("Input message > "))
    username = username.strip()
    text = text.strip()
    text = text.replace(' ', '%20')
    domain = "https://m.me/"
    param = "?text="
    urlTxt = domain+username+param+text
    url = domain+username
    print("url < \n"+url)
    print("url with message <\n"+urlTxt)
