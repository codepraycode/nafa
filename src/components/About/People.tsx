import Section from "../UI/Section";



const people = [
    
    {
        image:"https://s3-alpha-sig.figma.com/img/29f9/d16e/86025eea815a9dfaa385286a5821b6df?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GQAsfrz0PjMoNsJ6p~qB0ldXdpM6CwM6qx1Mrz8SRtWx2J-1fvGoKuyH9lX6dwSjFeEJmZll-vCA0fymP1c1iQYkkcsNT-pEnniIVMkbRRIZe7salpS5XgHea21P~8CrUdsg1dw2sALX0eBM9zCKYMuYdrBzeUOD3iw0EH2C3LfXp0ISk9QdzcafPE~4hTgZK2H4nxBB731BXgncGFxVoRhqtYh9h3PNpIgftrX8jMwPLPdsS6aC3zyRKE6QXVjHCBf3l6yR8OXXctlqwspm0mUB~xMjcvlZcQhowKcRBCBZ4Fh6iwH7h-hEa48EKybjmQDTyDQWSq~kSgMIrd9N4A__",
        name: "Babajide Akeredolu",
        about: "President and Acting BOT Chairman"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/8d96/f68a/5a1d7f278caf1a4fea63edc911007643?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LnAsJtGhN-37A8jkrIfTvW8WLtWWE-zVMO~L-cP8seqOGQAd85oqStdjbGuPJpyieVWsG4GnFartXwXLKWV7mxYAKRE4bFruae0dLxU~lxhtZKo91cgvo-Iwuhs7-vUBGY~r7BjFdS5s3ET28c9znl6MPrYjmpMnq8KUDG~fPJT8~IatIyz0dmXJEOLz9HKcKiphuT6ARsOYnGsFPQfuNP6vnFT~gxBOVCIINHYIQIREyDZQdjne2ODSQlrJ5Q48SHk6ww35ug0nitBYJ6iMDGk1hQvTdt~Gxt9PLon21zmXl4XB9rtUNyWyWbxLdN4tKEtj3MyunhHA74MaKbVscA__",
        name: "David Obatolu",
        about: "Vice President"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/190b/614e/280904092ffcb35ee0c9ee1a8d496c0d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UJwMGzt2fpY4U1glDSYhAdUB6XPB6iXRhDVxFvzhoRJdOAiFGVPAC22DeBd5UCyzJ25IUFpKhUSTjZS-3AuJCEeOZZp3QiH-WFnzrsnRnYNkq0W6opdyIDw30ien39Ks0dAMCLKZXhXSgp5seqclhlkqlfPqcIdTmnpJDjBt9sUgxeh5~yc7OuuRIhNFg7oyg3UQsVS-MT5mJeXzPd2MFCIj4Z~kqjbqZSIKolRjE6b8bSIMiZVucWi9VCVs-MNIyDe8~znDJY~sfSEL0mS1dJeGTQ0N6frnEFnqB8HaUB2mJPZ3491axsi1lqogDObzo2-~wlGSipET78fmAEavxw__",
        name: "Ms. Nancy Damhindi",
        about: "Head of HR and Secretary to the Board of Trustees"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/58de/d8a8/261fde1df9b5a116e68776049ad3825c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgCD0IpNlVISM1ZkhkAOQipOcFQjQmGU9uykTip5gxI9s10aXwJw1I0p~lhxRE2gmnHfM5TuT41IZ9RNIxdeCB6W1IthYwCwtytDOHinr-4HuwM5dDS39S62-j~mFQgGThoJmA2W98dovOJm3PJpxulvMPEFx-QIvvUU4rFC9S2LMvje5Zy7kc1RnjzuoEqFOPGO22XOlr8foA1LLQ9ym38tYS5osY1rmbaMYWea9iVhDb9brtjIJKKddNFhIhLrz1HXN23BfTXrtIVmzxBInCLNFCsN3jFx8hr~P5qyqOOZNPzpzjeLeXSTyt2thDskkH-7tOK6CtS61tq6wT1MJQ__",
        name: "Lawrence Ojaideh",
        about: "Secretary General"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/beb8/dcc9/2c97414350d32b734fd4509b37a2c19c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D3mbF549FlWxGhzOgQmMNUOTSafSfzC7nAco~GwNpDFs8eStpGuI9zKgLkpPUz7YduZ7dUczXxLnVC7Is9eU4rnvBs76G-TgjYbhvLWOBQXGoNLYi90COudGzpr8dma-k4XYxAkIr75CySGqeYGJi0i7WReczP9QUpOfirZ7ypC88rAPBbab2jL4pF~gJpb1wPyLiffG6A~UYZDJO7mRCCXBNDBEXHp8YT9nIkH7aPadYy80DaOf0~3DDUkhDE9LaSrUE14n6~2yz3JrBQBb54o~MvwNmDjqBWt6EFT6SIMGdjdJivL~CwGl7VvY98Ta510emLj77l7b82zaDADwWQ__",
        name: "Tola Ariyo",
        about: "Head of Legal & Compliance"
    }
]

export function People() {
    return (
        <Section name="people">
            <h2 className="section-title">Our People</h2>
            <br/><br/><br/><br/>


            <div className="listing">
                {
                    people.map((e, i)=>(  
                        <figure key={i}>
                            <div
                                className="img"
                                title={e.name}
                                style={{
                                    backgroundImage: `url(${e.image})`
                                }}
                            />
                            <br/>
                            <figcaption className="text-center">
                                <b>{e.name}</b>
                                <br/>
                                <span>{e.about}</span>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>

        </Section>
    )
}