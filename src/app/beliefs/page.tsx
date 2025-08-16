"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Local ESV verse map for hover text (expanded below)
const VERSE_MAP: Record<string, string> = {
	"2 Tim. 3:16": "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness,",
	"2 Pet. 1:19-21": "And we have the prophetic word more fully confirmed, to which you will do well to pay attention as to a lamp shining in a dark place, until the day dawns and the morning star rises in your hearts, knowing this first of all, that no prophecy of Scripture comes from someone's own interpretation. For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.",
	"Ps. 19:7-10": "The law of the LORD is perfect, reviving the soul; the testimony of the LORD is sure, making wise the simple; the precepts of the LORD are right, rejoicing the heart; the commandment of the LORD is pure, enlightening the eyes; the fear of the LORD is clean, enduring forever; the rules of the LORD are true, and righteous altogether. More to be desired are they than gold, even much fine gold; sweeter also than honey and drippings of the honeycomb.",
	"Is. 40:8": "The grass withers, the flower fades, but the word of our God will stand forever.",
	"Matt. 5:17": "Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.",
	"John 5:39": "You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me,",
	"Romans 15:4": "For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope.",
	"Romans 16:25-26": "Now to him who is able to strengthen you according to my gospel and the preaching of Jesus Christ, according to the revelation of the mystery that was kept secret for long ages but has now been disclosed and through the prophetic writings has been made known to all nations, according to the command of the eternal God, to bring about the obedience of faith—",
	"Hebrews 1:1-2": "Long ago, at many times and in many ways, God spoke to our fathers by the prophets, but in these last days he has spoken to us by his Son, whom he appointed the heir of all things, through whom also he created the world.",
	"Rom. 10:17": "So faith comes from hearing, and hearing through the word of Christ.",
	"Romans 10:17": "So faith comes from hearing, and hearing through the word of Christ.",
	"Heb. 4:12": "For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.",
	"Romans 12:1-2": "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship. Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.",
	"Philippians 1:18-19": "What then? Only that in every way, whether in pretense or in truth, Christ is proclaimed, and in that I rejoice. Yes, and I will rejoice, for I know that through your prayers and the help of the Spirit of Jesus Christ this will turn out for my deliverance,",
	"Col. 3:16": "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.",
	"Gen. 1:26-28": "Then God said, \"Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth.\" So God created man in his own image, in the image of God he created him; male and female he created them. And God blessed them. And God said to them, \"Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth.\"",
	"Luke 3:21-22": "Now when all the people were baptized, and when Jesus also had been baptized and was praying, the heavens were opened, and the Holy Spirit descended on him in bodily form, like a dove; and a voice came from heaven, \"You are my beloved Son; with you I am well pleased.\"",
	"Matt. 28:18-20": "And Jesus came and said to them, \"All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.\"",
	"John 3:16": "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
	"2 Co. 5:17-21": "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come. All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation; that is, in Christ God was reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation. Therefore, we are ambassadors for Christ, God making his appeal through us. We implore you on behalf of Christ, be reconciled to God. For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.",
	"John 16:8": "And when he comes, he will convict the world concerning sin and righteousness and judgment:",
	"1 Co. 6:11": "And such were some of you. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.",
	"Is. 40:28": "Have you not known? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary; his understanding is unsearchable.",
	"Is. 46:10": "declaring the end from the beginning and from ancient times things not yet done, saying, \"My counsel shall stand, and I will accomplish all my purpose,\"",
	"Job 42:2": "I know that you can do all things, and that no purpose of yours can be thwarted.",
	"Jer. 10:10": "But the LORD is the true God; he is the living God and the everlasting King. At his wrath the earth quakes, and the nations cannot endure his indignation.",
	"Ps. 33:11": "The counsel of the LORD stands forever, the plans of his heart to all generations.",
	"Ps. 90:2": "Before the mountains were brought forth, or ever you had formed the earth and the world, from everlasting to everlasting you are God.",
	"Prov. 16:9": "The heart of man plans his way, but the LORD establishes his steps.",
	"Rom. 8:28": "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
	"1 Tim. 1:17": "To the King of ages, immortal, invisible, the only God, be honor and glory forever and ever. Amen.",
	"1 Tim. 2:3-4": "This is good, and it is pleasing in the sight of God our Savior, who desires all people to be saved and to come to the knowledge of the truth.",
	"2 Pet. 3:9": "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.",
	"John 1:1-5": "In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through him, and without him was not any thing made that was made. In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.",
	"Gal. 4:4": "But when the fullness of time had come, God sent forth his Son, born of woman, born under the law,",
	"1 Co. 15:3-4": "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures,",
	"Col. 3:1": "If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God.",
	"Heb. 7:25": "Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.",
	"Acts 1:11": "and said, \"Men of Galilee, why do you stand looking into heaven? This Jesus, who was taken up from you into heaven, will come in the same way as you saw him go into heaven.\"",
	"1 Co. 15:52": "in a moment, in the twinkling of an eye, at the last trumpet. For the trumpet will sound, and the dead will be raised imperishable, and we shall be changed.",
	"Titus 3:5": "he saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit,",
	"1 Co. 6:19-20": "Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.",
	"Rom. 8:26": "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.",
	"2 Co. 3:18": "And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another. For this comes from the Lord who is the Spirit.",
	  "Eph. 1:13-14": "In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit, who is the guarantee of our inheritance until we acquire possession of it, to the praise of his glory.",
  "1 Co. 12": "Now there are varieties of gifts, but the same Spirit; and there are varieties of service, but the same Lord; and there are varieties of activities, but it is the same God who empowers them all in everyone. To each is given the manifestation of the Spirit for the common good. For to one is given through the Spirit the utterance of wisdom, and to another the utterance of knowledge according to the same Spirit, to another faith by the same Spirit, to another gifts of healing by the one Spirit, to another the working of miracles, to another prophecy, to another the ability to distinguish between spirits, to another various kinds of tongues, to another the interpretation of tongues. All these are empowered by one and the same Spirit, who apportions to each one individually as he wills.",
	"Gen. 1:1": "In the beginning, God created the heavens and the earth.",
	"Mal. 3:6": "For I the LORD do not change; therefore you, O children of Jacob, are not consumed.",
	"1 John 1:5": "This is the message we have heard from him and proclaim to you, that God is light, and in him is no darkness at all.",
	"1 John 4:16": "So we have come to know and to believe the love that God has for us. God is love, and whoever abides in love abides in God, and God abides in him.",
	"Heb. 6:18": "so that by two unchangeable things, in which it is impossible for God to lie, we who have fled for refuge might have strong encouragement to hold fast to the hope set before us.",
	  "Gen. 9:6": "Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his own image.",
  "Gen. 1:26-27": "Then God said, \"Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth.\" So God created man in his own image, in the image of God he created him; male and female he created them.",
	"Eccl. 7:29": "See, this alone I found, that God made man upright, but they have sought out many schemes.",
	"Rom. 3:23": "for all have sinned and fall short of the glory of God,",
	"Rom. 6:23": "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
	"Rom. 7:10": "The very commandment that promised life proved to be death to me.",
	"Col. 1:21-22": "And you, who once were alienated and hostile in mind, doing evil deeds, he has now reconciled in his body of flesh by his death, in order to present you holy and blameless and above reproach before him,",
	"Rom. 10:9-10": "because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart one believes and is justified, and with the mouth one confesses and is saved.",
	"Eph. 2:8-9": "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
	"Titus 2:11-14": "For the grace of God has appeared, bringing salvation for all people, training us to renounce ungodliness and worldly passions, and to live self-controlled, upright, and godly lives in the present age, waiting for our blessed hope, the appearing of the glory of our great God and Savior Jesus Christ, who gave himself for us to redeem us from all lawlessness and to purify for himself a people for his own possession who are zealous for good works.",
};

// Add additional passages and longer ranges as concise excerpts
Object.assign(VERSE_MAP, {
  // God the Son (additional)
  "Philippians 2:5-11": "Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself... therefore God has highly exalted him and bestowed on him the name that is above every name.",
  "Matt. 1:18-2:1": "Now the birth of Jesus Christ took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child from the Holy Spirit. And her husband Joseph, being a just man and unwilling to put her to shame, resolved to divorce her quietly. But as he considered these things, behold, an angel of the Lord appeared to him in a dream, saying, \"Joseph, son of David, do not fear to take Mary as your wife, for that which is conceived in her is from the Holy Spirit. She will bear a son, and you shall call his name Jesus, for he will save his people from their sins.\" All this took place to fulfill what the Lord had spoken by the prophet: \"Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel\" (which means, God with us). When Joseph woke from sleep, he did as the angel of the Lord commanded him: he took his wife, but knew her not until she had given birth to a son. And he called his name Jesus. Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the east came to Jerusalem,",

  // Church and order
  "1 Co. 12:12-27": "For just as the body is one and has many members, and all the members of the body, though many, are one body, so it is with Christ...",
  "Eph. 1:22-23": "And he put all things under his feet and gave him as head over all things to the church, which is his body, the fullness of him who fills all in all.",
  "Eph. 2:19-22": "So then you are no longer strangers and aliens, but you are fellow citizens with the saints and members of the household of God...",
  "Eph. 5:22-32": "Wives, submit to your own husbands, as to the Lord... Husbands, love your wives, as Christ loved the church and gave himself up for her...",
  "Col. 1:18": "And he is the head of the body, the church. He is the beginning, the firstborn from the dead, that in everything he might be preeminent.",
  "1 Tim. 2": "First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people...",
  "1 Tim. 3:1-15": "The saying is trustworthy: If anyone aspires to the office of overseer, he desires a noble task...",

  // Mankind
  "Rom. 1:18-32": "For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men...",
  "Eph. 2:1-22": "And you were dead in the trespasses and sins in which you once walked... But God, being rich in mercy...",

  // Salvation (longer ranges summarized)
  "Rom. 8:1-18": "There is therefore now no condemnation for those who are in Christ Jesus...",
  "Rom. 8:29-39": "For those whom he foreknew he also predestined... nothing will be able to separate us from the love of God in Christ Jesus our Lord.",
  "Gal. 2:20": "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me...",
  "Gal. 3:13": "Christ redeemed us from the curse of the law by becoming a curse for us...",
  "Eph. 1:7": "In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace,",

  // Judgment
  "Matt. 25:31-46": "When the Son of Man comes in his glory, and all the angels with him, then he will sit on his glorious throne. Before him will be gathered all the nations, and he will separate people one from another as a shepherd separates the sheep from the goats. And he will place the sheep on his right, but the goats on the left. Then the King will say to those on his right, 'Come, you who are blessed by my Father, inherit the kingdom prepared for you from the foundation of the world.'",
  "Mark 9:43-48": "And if your hand causes you to sin, cut it off. It is better for you to enter life crippled...",
  "1 Co. 15:24-28": "Then comes the end, when he delivers the kingdom to God the Father...",
  "2 Co. 5:10": "For we must all appear before the judgment seat of Christ...",
  "2 Thess. 1:5-12": "This is evidence of the righteous judgment of God, that you may be considered worthy of the kingdom of God, for which you are also suffering— since indeed God considers it just to repay with affliction those who afflict you, and to grant relief to you who are afflicted as well as to us, when the Lord Jesus is revealed from heaven with his mighty angels in flaming fire, inflicting vengeance on those who do not know God and on those who do not obey the gospel of our Lord Jesus. They will suffer the punishment of eternal destruction, away from the presence of the Lord and from the glory of his might, when he comes on that day to be glorified in his saints, and to be marveled at among all who have believed, because our testimony to you was believed. To this end we always pray for you, that our God may make you worthy of his calling and may fulfill every resolve for good and every work of faith by his power, so that the name of our Lord Jesus may be glorified in you, and you in him, according to the grace of our God and the Lord Jesus Christ.",
  "2 Tim. 4:1": "I charge you in the presence of God and of Christ Jesus, who is to judge the living and the dead...",

  // Baptism
  "Acts 8:34-40": "And the eunuch said to Philip, \"About whom, I ask you, does the prophet say this...\" ... and they both went down into the water, Philip and the eunuch, and he baptized him.",
  "Acts 2:37-40": "Now when they heard this they were cut to the heart... And Peter said to them, \"Repent and be baptized every one of you in the name of Jesus Christ...\"",
  "Rom. 6:1-14": "We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead...",
  "1 Pet. 3:18-22": "Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience...",
  "1 Co. 10:1-4": "For I do not want you to be unaware, brothers, that our fathers were all under the cloud... and all drank the same spiritual drink. For they drank from the spiritual Rock that followed them, and the Rock was Christ.",

  // Lord's Supper and discipleship
  "Luke 22:19-20": "And he took bread, and when he had given thanks, he broke it and gave it to them, saying, \"This is my body, which is given for you. Do this in remembrance of me.\" And likewise the cup after they had eaten, saying, \"This cup that is poured out for you is the new covenant in my blood.\"",
  "1 Co. 11:17-33": "For I received from the Lord what I also delivered to you, that the Lord Jesus on the night when he was betrayed took bread...",
  "Matt. 6:25-33": "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
  "Rom. 8:9-11": "You, however, are not in the flesh but in the Spirit, if in fact the Spirit of God dwells in you...",
  "Eph. 3:16-17": "that according to the riches of his glory he may grant you to be strengthened with power through his Spirit in your inner being...",
  "Eph. 4:1-3": "I therefore, a prisoner for the Lord, urge you to walk in a manner worthy of the calling to which you have been called...",
  "John 6:35": "Jesus said to them, \"I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst.\"",
  "Col. 1:10": "so as to walk in a manner worthy of the Lord, fully pleasing to him: bearing fruit in every good work and increasing in the knowledge of God;",
  "Phil. 1:27": "Only let your manner of life be worthy of the gospel of Christ...",

  // Family
  "Gen. 2:24": "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.",
  "Mal. 2:14-16": "But you say, \"Why does he not?\" Because the LORD was witness between you and the wife of your youth... For the man who does not love his wife but divorces her, says the LORD...",
  "Ps. 127:3-5": "Behold, children are a heritage from the LORD, the fruit of the womb a reward...",
  "Prov. 22:6": "Train up a child in the way he should go; even when he is old he will not depart from it.",
  "Deut. 6:6-7": "And these words that I command you today shall be on your heart. You shall teach them diligently to your children...",
  "1 Co. 7": "Now concerning the matters about which you wrote: \"It is good for a man not to have sexual relations with a woman.\" But because of the temptation to sexual immorality, each man should have his own wife and each woman her own husband. The husband should give to his wife her conjugal rights, and likewise the wife to her husband. For the wife does not have authority over her own body, but the husband does. Likewise the husband does not have authority over his own body, but the wife does. Do not deprive one another, except perhaps by agreement for a limited time, that you may devote yourselves to prayer; but then come together again, so that Satan may not tempt you because of your lack of self-control. Now as a concession, not a command, I say this. I wish that all were as I myself am. But each has his own gift from God, one of one kind and one of another."
});

// Bible verse component with hover functionality (local map)
function BibleVerse({ reference }: { reference: string }) {
	const [showTooltip, setShowTooltip] = useState(false);
	const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const fullText = VERSE_MAP[reference];
	const esvLink = `https://www.esv.org/${encodeURIComponent(reference.replace(/\s/g, ''))}/`;

	let displayText = fullText || '';
	if (displayText) {
		// Split on sentence boundaries and take first 4 complete sentences
		const sentences = displayText.split(/(?<=\.)\s+(?=[A-Z])/);
		if (sentences.length > 4) {
			displayText = sentences.slice(0, 4).join(' ') + ' …';
		} else if (displayText.length > 300) {
			// If still too long but fewer than 4 sentences, truncate by word count
			const words = displayText.split(' ');
			if (words.length > 50) {
				displayText = words.slice(0, 50).join(' ') + ' …';
			}
		}
	}

	return (
		<>
			<span
				className="font-bold text-church-blue hover:text-church-gold cursor-help transition-colors relative"
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
				onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
			>
				{reference}
			</span>
			{showTooltip && (
				<span
					className="fixed z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg max-w-md text-sm pointer-events-none"
					style={{ top: Math.max(mousePos.y - 16, 0), left: mousePos.x + 12 }}
				>
					<span className="font-semibold block mb-1">{reference} (ESV)</span>
					<span className="text-gray-200 block">
						{displayText || 'Passage is lengthy or not yet added.'}
					</span>
					{!fullText && (
						<span className="block mt-2 text-blue-300 underline pointer-events-auto">
							<a href={esvLink} target="_blank" rel="noreferrer">Open full passage on esv.org</a>
						</span>
					)}
				</span>
			)}
		</>
	);
}

export default function Beliefs() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="enhanced-navbar relative z-50">
        <div className="navbar-logo-absolute">
          <Link href="/">
            <Image 
              src="/logos/MCF Church Logo1.jpg" 
              alt="The Church at Murray State" 
              className="navbar-logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="navbar-container relative">
          <div className="block md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => {
                setIsMenuOpen((o) => {
                  const next = !o;
                  console.log("[Beliefs] toggle menu ->", next);
                  return next;
                });
              }}
              className="cursor-pointer text-church-gray hover:text-church-gold"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="navbar-links-section hidden md:block">
            <div className="navbar-links">
              <Link href="/" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Home
              </Link>
              <Link href="/beliefs" className="text-church-blue hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Beliefs
              </Link>
              <Link href="/what-to-expect" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                What to Expect
              </Link>
              {/* Donations link hidden until ready */}
              <Link href="/connect" className="text-church-gray hover:text-church-gold px-4 py-3 rounded-md text-lg font-medium transition-colors">
                Connect
              </Link>
            </div>
          </div>
          {/* Current page label on mobile */}
          <div className="md:hidden col-start-2 justify-self-center font-semibold text-church-blue">
            Beliefs
          </div>
          <div className="hidden md:block"></div>
        </div>
      </nav>
      <div className={`mobile-menu w-full ${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 py-3">
          <Link href="/" className="">Home</Link>
          <Link href="/beliefs" className="">Beliefs</Link>
          <Link href="/what-to-expect" className="">What to Expect</Link>
            {/* Donations link hidden until ready */}
          <Link href="/connect" className="">Connect</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-church-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Believe</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Our faith is built on the foundation of Scripture and historic Christian doctrine
          </p>
        </div>
      </section>

      {/* Beliefs Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Scripture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Scripture</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Canon</h3>
                <p className="text-gray-700 leading-relaxed">
                  All of the following statements are based upon the traditional 66-book Protestant canon.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God-Breathed</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Scripture is God-breathed, inspired by the Holy Spirit, and the foundational means by which believers can claim special revelation of God. Though God has revealed Himself to mankind through His creation, He saw fit to communicate to humans through the Scriptures. The Bible thus serves as the foundational authority for special knowledge of God including: (a) God&apos;s work in salvation, (b) God&apos;s plans for His Creation, (c) All practical matters of Christian living. In all matters of spiritual knowledge and right living, Scripture has the final word. Thus, the Christian life must be thoroughly Scripture-oriented and built upon its promises. (<BibleVerse reference="2 Tim. 3:16" />, <BibleVerse reference="2 Pet. 1:19-21" />, <BibleVerse reference="Ps. 19:7-10" />, <BibleVerse reference="Is. 40:8" />, <BibleVerse reference="Matt. 5:17" />, <BibleVerse reference="John 5:39" />, <BibleVerse reference="Romans 15:4" />, <BibleVerse reference="Romans 16:25-26" />, <BibleVerse reference="Hebrews 1:1-2" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">The Role of Human Authorship</h3>
                <p className="text-gray-700 leading-relaxed">
                  While Scripture is God-breathed, humans have also been entrusted to write under the inspiration of the Spirit. Thus, the divine was entrusted to the natural and subjugated to human realities. For this reason, the Scripture emulates the human experience in being conveyed in numerous genres, contextual settings, and occasions over a vast distance of time and space. These realities necessitate the careful consideration of contexts and authorial intent in discerning the meaning of the Scriptures.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">The Power of the Scripture</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Scripture serves as the basis for faith as well for fundamental change. The Scripture attests to its own ability and power to bring about faith and sanctification. Thus, it is vital to receive the Scripture as God&apos;s word in both message and writing. (<BibleVerse reference="Rom. 10:17" />, <BibleVerse reference="Heb. 4:12" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">The Holy Spirit and the Scripture</h3>
                <p className="text-gray-700 leading-relaxed">
                  Just as the Holy Spirit inspired the writing of the Scriptures, He also works in the hearts and minds of people who read and hear God&apos;s Word and carefully consider the testimony of the Bible. The Holy Spirit is able to convict hearts, renew minds, and work in power to change the lives of individuals irrespective of their language, origin, or any other human factor. Thus, while translation and manuscript work are important within Christian study, it is understood that the Holy Spirit can utilize any translation (modern or extant) to lead a person to saving knowledge of the truth found in Jesus. (<BibleVerse reference="Romans 10:17" />, <BibleVerse reference="Romans 12:1-2" />, <BibleVerse reference="Philippians 1:18-19" />, <BibleVerse reference="Col. 3:16" />, <BibleVerse reference="Heb. 4:12" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Scripture is God&apos;s special revelation to mankind and is pure, powerful, and effective for the salvation of the human soul. The Scripture is the final authority for living and spiritual belief in the life of the Christian. The Scripture is to be received as a God-given reality which impresses on our hearts wherein the Holy Spirit can move in power.
                </p>
              </div>
            </div>
          </div>

          {/* God */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">God</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Trinity</h3>
                <p className="text-gray-700 leading-relaxed">
                  God is a triune being; while God is unified in Himself, He is known through three distinct persons: the Father, the Son, and the Holy Spirit. Being wholly unified, all persons of the Trinity are coeternal and share in the same divine essence. There is not chronological priority of any one of the persons of the Trinity - the Father, Son, and Holy Spirit are coeternal. Yet, each person of the Trinity may be known through their distinct roles. Only the Father sent His Son into the World; only the Son took on flesh and died as a ransom for humanity to be raised to new life; only the Spirit of God convicts the hearts of men and sanctifies believers. (<BibleVerse reference="Gen. 1:26-28" />, <BibleVerse reference="Luke 3:21-22" />, <BibleVerse reference="Matt. 28:18-20" />, <BibleVerse reference="John 3:16" />, <BibleVerse reference="2 Co. 5:17-21" />, <BibleVerse reference="John 16:8" />, <BibleVerse reference="1 Co. 6:11" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God the Father</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Father is the Creator of the world, is sovereign over all parts of His creation, and works providentially for His people in all times and places. God&apos;s desire for the salvation of mankind is evident in the sending of His Son to be sacrificed on behalf of sinful humans. (<BibleVerse reference="Is. 40:28" />, <BibleVerse reference="Is. 46:10" />, <BibleVerse reference="Job 42:2" />, <BibleVerse reference="Jer. 10:10" />, <BibleVerse reference="Ps. 33:11" />, <BibleVerse reference="Ps. 90:2" />, <BibleVerse reference="Prov. 16:9" />, <BibleVerse reference="Rom. 8:28" />, <BibleVerse reference="1 Tim. 1:17" />, <BibleVerse reference="1 Tim. 2:3-4" />, <BibleVerse reference="2 Pet. 3:9" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God the Son</h3>
                <p className="text-gray-700 leading-relaxed">
                  No thing in Creation was created apart from the Son (or the Word); furthermore, the son holds all of creation together. Though having full equality with God, the Son took on human flesh in His incarnation, and became fully man having been born of the virgin Mary. Being fully God and fully man, the Son lived a sinless life of active obedience to the Father, and submitted Himself to death by crucifixion in order to save those who, by faith, receive His sacrifice as a substitution for the death they deserve. The Son, in his resurrection, demonstrated His power and authority over the grave. In His ascension, the Son has been seated at the right hand of God and intercedes for the saints who place faith in Him. The Son will return to earth again in His second coming, and consummate a New Creation accompanied by the resurrection of the dead. (<BibleVerse reference="John 1:1-5" />, <BibleVerse reference="Philippians 2:5-11" />, <BibleVerse reference="Matt. 1:18-2:1" />, <BibleVerse reference="Gal. 4:4" />, <BibleVerse reference="2 Co. 5:17-21" />, <BibleVerse reference="1 Co. 15:3-4" />, <BibleVerse reference="Col. 3:1" />, <BibleVerse reference="Heb. 7:25" />, <BibleVerse reference="Acts 1:11" />, <BibleVerse reference="1 Co. 15:52" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">God the Holy Spirit</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Holy Spirit proceeds from the Son and from the Father to convict the world of sin, righteousness, and judgment. The Holy Spirit regenerates the hearts of those who are believers; He dwells within believers and testifies on behalf of believers who do not know how to pray. In addition to the roles above, the Holy Spirit sanctifies believers and draws those who have been reborn into the image of Christ. The Holy Spirit is the seal of believers and is guarantee of redemption. The Holy Spirit equips believers for service within the Kingdom of God and gives gifts according to needs and His good pleasure. (<BibleVerse reference="John 16:8" />, <BibleVerse reference="Titus 3:5" />, <BibleVerse reference="1 Co. 6:19-20" />, <BibleVerse reference="Rom. 8:26" />, <BibleVerse reference="2 Co. 3:18" />, <BibleVerse reference="Eph. 1:13-14" />, <BibleVerse reference="1 Co. 12" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Attributes of God</h3>
                <p className="text-gray-700 leading-relaxed">
                  God is the uncaused cause of all things. God is unchanging through the ages. He is perfect in power, holiness, righteousness, justice, and goodness. God is the basis for all moral law and every good thing. God is described by Scripture as love and light. Human experiences of love, light, and what is fundamentally good all find their foundation in Him. God does not sin, lie, or act against any part of His own nature. God is undivided in Himself. God is higher than all other things including evil powers and rulers who are merely created beings. God is all powerful, knowledgeable, and present. God is the only One who is worthy of glory, honor, praise, and worship. (<BibleVerse reference="Gen. 1:1" />, <BibleVerse reference="Mal. 3:6" />, <BibleVerse reference="1 John 1:5" />, <BibleVerse reference="1 John 4:16" />, <BibleVerse reference="Heb. 6:18" />)
                </p>
              </div>
            </div>
          </div>

          {/* Mankind */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Mankind</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-church-blue mb-4">Image and Sin</h3>
              <p className="text-gray-700 leading-relaxed">
                It is evident in the Scriptures that mankind - male and female alike - bears the image of God. Being an image bearer marks all humans as being inherently valuable to God and thus worthy of love, protection, etc. Law and government are both ordained by God to provide security for man, but also hold him accountable for wrongdoing. God made man upright, and created humans to be morally responsible agents. Nevertheless, Adam failed to obey God&apos;s commands which were designed for life which led to the spread of sin and death to all of his progeny. Therefore, all humans after the fall have been born into sin and are sinners by nature and by choice. Because God is completely righteous and holy, He is bound to judge sin and sinners; humanity&apos;s dire situation is thus that they have been separated from God and will be judged in wrath by God if no provision for sin is made. Humans are incapable of attaining salvation according to their own works or merits and must rely upon the grace of God for salvation through faith. Therefore, humans who are bound to be judged by God must look to the same God for provisions of mercy and grace. (<BibleVerse reference="Gen. 1:26-27" />, <BibleVerse reference="Gen. 9:6" />, <BibleVerse reference="Eccl. 7:29" />, <BibleVerse reference="Rom. 1:18-32" />, <BibleVerse reference="Rom. 3:23" />, <BibleVerse reference="Rom. 6:23" />, <BibleVerse reference="Rom. 7:10" />, <BibleVerse reference="Col. 1:21-22" />, <BibleVerse reference="Eph. 2:1-22" />)
              </p>
            </div>
          </div>

          {/* Salvation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Salvation (Justification, Sanctification, Glorification)</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Salvation in the Scriptures is something that is afforded to believers through Jesus alone, by grace alone, through faith alone, for the glory of God alone. Salvation as described in the Scriptures also takes on three conventional facets: justification, sanctification, and glorification. For any person who repents of sin, acknowledges Christ as Lord, and believes in His heart that Jesus was raised from the dead, such a person will be saved. Upon believing, God declares the believer justified or legally absolved of his sin debt. Yet, God also promises restoration of the individual through sanctification or being made Holy. This sanctification begins with fundamental heart change (i.e. regeneration) which is complete, and accompanied by restoration of the believer in his mind, attitudes, and actions. The final promise for salvation which is given to all believers is that of glorification. This glorification is the promise that the believer will, just as Jesus, be raised to new life in the New Heavens and New Earth, be unified with Christ to enjoy him forever, and be given a form that is free of all sin, death, sickness, and baggage. (<BibleVerse reference="Rom. 8:1-18" />, <BibleVerse reference="Rom. 8:29-39" />, <BibleVerse reference="Rom. 10:9-10" />, <BibleVerse reference="Rom. 10:17" />, <BibleVerse reference="2 Co. 5:17-21" />, <BibleVerse reference="Gal. 2:20" />, <BibleVerse reference="Gal. 3:13" />, <BibleVerse reference="Eph. 1:7" />, <BibleVerse reference="Eph. 2:8-9" />, <BibleVerse reference="Titus 2:11-14" />, <BibleVerse reference="Titus 3:5" />)
              </p>
            </div>
          </div>

          {/* Judgment */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Judgment</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                The Scripture is clear that all who do not profess faith will be subject to Hell, torment, and destruction in the age to come. This final judgment will be completely just and proportional to the gravity of sin in the life of the individual. (<BibleVerse reference="Matt. 25:31-46" />, <BibleVerse reference="Mark 9:43-48" />, <BibleVerse reference="1 Co. 15:24-28" />, <BibleVerse reference="2 Co. 5:10" />, <BibleVerse reference="2 Thess. 1:5-12" />, <BibleVerse reference="2 Tim. 4:1" />)
              </p>
            </div>
          </div>

          {/* Church */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Church</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                The church in its essence is the representative body of all believers in Jesus in all times and all places. Believers are commanded to meet together for mutual edification, teaching, preaching, taking of the sacraments, worship, and prayer. The church is the Body of Christ and is diverse in its members who represent different gifts. As the Body of Christ, the church is commissioned to participate in the evangelization and discipleship of the world. Furthermore, the church is to model the things which are biblically prescribed in church leadership concerning church authority. Though the Scripture is clear that men and women are equally gifted, competent, and capable in the Lord, the church models obedience to the Lord by emulating the leadership patterns prescribed by God for the home. (<BibleVerse reference="1 Co. 12:12-27" />, <BibleVerse reference="Eph. 1:22-23" />, <BibleVerse reference="Eph. 2:19-22" />, <BibleVerse reference="Eph. 5:22-32" />, <BibleVerse reference="Col. 1:18" />, <BibleVerse reference="1 Tim. 2" />, <BibleVerse reference="1 Tim. 3:1-15" />)
              </p>
            </div>
          </div>

          {/* Baptism */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Baptism</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Water baptism is the obedient response of believers who desire to follow Christ and give their life to Him. Jesus commanded his disciples to baptize new believers in the Great Commission. Scripture indicates that baptism is performed through immersion. In the gospels and Acts, baptism was conjoined to the act of confession and repentance: confessing and repenting of sin, but also confessing belief in Christ for salvation. Paul describes baptism as the reality of being so unified with Christ that one dies with Christ, is buried with Christ, and is given new life in Him. Across the wider canon, baptism is also associated with a judgment against sin and the embrace of new creation and deliverance. For these reasons, the Scripture ascribes a distinct power and importance to baptism which is not grounded in the substance of the water but in the power of God to raise a person to new life. This statement is not seen as being in conflict with the previous section on salvation which is afforded by grace through faith. (<BibleVerse reference="Matt. 28:18-20" />, <BibleVerse reference="Acts 8:34-40" />, <BibleVerse reference="Acts 2:37-40" />, <BibleVerse reference="Rom. 6:1-14" />, <BibleVerse reference="1 Pet. 3:18-22" />, <BibleVerse reference="1 Co. 10:1-4" />)
              </p>
            </div>
          </div>

          {/* The Lord's Supper */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">The Lord&apos;s Supper</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                The Lord&apos;s Supper is the special meal of the New Covenant to be enjoyed by believers as commemoration, communion, and promise. In taking the Lord&apos;s Supper, Christians receive the elements and remember the sacrificial work of Christ on the cross. Christians are nourished by the fact that God provides physical food. Yet, even more, Christians are nourished spiritually by the fact that Christ died for them. Christians are to acknowledge the presence of the Lord in communion as well. Christians are mindful of the fact that in Christ&apos;s Great Commission and sending of the Holy Spirit, He is indeed with believers as they take the Lord&apos;s Supper. Therefore, the elements serve as the present reminder of the real communion believers share with the Lord. Such is why believers are told to walk in a manner worthy of the Lord and are warned against taking the elements in an unworthy manner. Finally, the Lord&apos;s Supper is to be taken as a proclamation of the Lord&apos;s death until He comes. This is to say that the Lord&apos;s Supper postures believers towards an eager anticipation of Christ&apos;s second coming. (<BibleVerse reference="Luke 22:19-20" />, <BibleVerse reference="1 Co. 11:17-33" />, <BibleVerse reference="Matt. 6:25-33" />, <BibleVerse reference="Matt. 28:18-20" />, <BibleVerse reference="Gal. 2:20" />, <BibleVerse reference="Rom. 8:9-11" />, <BibleVerse reference="Eph. 3:16-17" />, <BibleVerse reference="Eph. 4:1-3" />, <BibleVerse reference="John 6:35" />, <BibleVerse reference="Col. 1:10" />, <BibleVerse reference="Phil. 1:27" />)
              </p>
            </div>
          </div>

          {/* The Family */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">The Family</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Marriage and Family</h3>
                <p className="text-gray-700 leading-relaxed">
                  The biblical model for any romantic relationships is set in the context of marriage. Marriage and family are founded on the union of one man and one woman who are joined covenantally to one another. This pattern of covenant as prescribed for marriage, by its very nature, commends both man and woman to adopt a Christ-like attitude of sacrifice and care for one another that is rooted in a humble submission to God. The marriage of man and woman is thus designed to reflect Christ&apos;s relationship to the church and serve as a beautiful testimony to the world.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Though not all marriages are bound to produce children, it is equally affirmed that all children are a gift from the Lord. Children are received as gifts to be stewarded, nurtured, and provided for. As such, parents are to train their children up in the Lord. (<BibleVerse reference="Gen. 2:24" />, <BibleVerse reference="Mal. 2:14-16" />, <BibleVerse reference="Eph. 5:22-32" />, <BibleVerse reference="Ps. 127:3-5" />, <BibleVerse reference="Prov. 22:6" />, <BibleVerse reference="Deut. 6:6-7" />)
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-church-blue mb-4">Singleness</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Scripture does not view singleness as a sin, but rather as an opportunity for uniquely missional and holy living. The role of the church and the family is to provide the necessary love and support for single individuals who are in equal need of Christian community. (<BibleVerse reference="1 Co. 7" />)
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-church-blue mb-8 text-center">Summary</h2>
            
            <div className="bg-church-blue text-white p-8 rounded-lg">
              <p className="text-blue-200 leading-relaxed">
                The doctrinal beliefs elicited above are those which the church has found essential in its major creeds and confessions for much of church history. Though not without minor differences, the confessional document here has been designed to affirm what is Scriptural and what has been historically affirmed by the church. It is believed that a robust view of the Scriptures along with historic sensitivity will provide the life and guidance needed for the church community.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-church-blue mb-6">Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;d love to discuss our beliefs with you and answer any questions you might have.
          </p>
          <Link 
            href="/connect"
            className="bg-church-gold hover:bg-church-gold text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-church-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4">The Church at Murray State</h3>
              <p className="text-gray-300">
                A gospel-centered community serving Murray State University and the Murray community.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Times</h4>
              <p className="text-gray-300">Sunday Worship: 11:00 AM</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <p className="text-gray-300">
                1508 Chestnut St.<br />
                Murray, KY 42071
              </p>
            </div>
          </div>
          
          {/* Copyright removed */}
        </div>
      </footer>
    </div>
  );
}