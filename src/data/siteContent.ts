export type NavItem = {
  label: string;
  path: string;
};

export type IconName =
  | "anchor"
  | "book"
  | "compass"
  | "hands"
  | "heart"
  | "home"
  | "light"
  | "mail"
  | "shield"
  | "users";

export type CardContent = {
  title: string;
  description: string;
  icon: IconName;
};

export const ministryName = "Lighthouse Faith & Trust Ministry";
export const tagline = "A Beacon of Faith, A Foundation of Trust.";
export const donationUrl = "https://www.zeffy.com/en-US/donation-form/empower-more";

export const ministryContacts = [
  {
    name: "Minister Andre Duval",
    email: "Andre.duval@lighthousefaithministry.org",
  },
  {
    name: "Minister Sabrina Mowatt",
    email: "sabrina.mowatt@lighthousefaithministry.org",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Faith", path: "/statement-of-faith" },
  { label: "Ministries", path: "/ministries" },
  { label: "Membership", path: "/membership" },
  { label: "Donate", path: "/donate" },
  { label: "Benevolence", path: "/benevolence" },
  { label: "Contact", path: "/contact" },
];

export const footerLinks: NavItem[] = [
  ...navItems,
  { label: "Mission & Vision", path: "/mission-vision" },
  { label: "Governance", path: "/governance" },
];

export const coreValues: CardContent[] = [
  {
    title: "Faith",
    description: "Trusting God as the center of worship, service, and daily life.",
    icon: "light",
  },
  {
    title: "Trust",
    description: "Building a fellowship shaped by confidentiality, accountability, and care.",
    icon: "shield",
  },
  {
    title: "Stewardship",
    description: "Managing resources with wisdom, order, and mission-centered purpose.",
    icon: "anchor",
  },
  {
    title: "Service",
    description: "Meeting practical needs through compassion, benevolence, and outreach.",
    icon: "hands",
  },
  {
    title: "Fellowship",
    description: "Nurturing meaningful Christian community for individuals and families.",
    icon: "users",
  },
  {
    title: "Integrity",
    description: "Acting with honesty, humility, and consistency in public and private work.",
    icon: "compass",
  },
  {
    title: "Compassion",
    description: "Responding to need with patience, dignity, prayer, and practical support.",
    icon: "heart",
  },
  {
    title: "Family",
    description: "Encouraging households to grow in faith, stability, and shared purpose.",
    icon: "home",
  },
  {
    title: "Community",
    description: "Serving neighbors through education, charitable works, and support.",
    icon: "mail",
  },
  {
    title: "Purpose",
    description: "Helping people walk with clarity, conviction, and Christian hope.",
    icon: "book",
  },
];

export const ministryPrograms: CardContent[] = [
  {
    title: "Faith & Discipleship",
    description: "Biblical teaching, prayer, fellowship, and spiritual formation.",
    icon: "book",
  },
  {
    title: "Benevolence & Mutual Aid",
    description: "Assistance for individuals and families in need, administered with care, discretion, and stewardship.",
    icon: "heart",
  },
  {
    title: "Education & Advocacy",
    description: "Educational resources, community guidance, and faith-based instruction.",
    icon: "compass",
  },
  {
    title: "Family & Community Support",
    description: "Support for families, youth, and community strengthening.",
    icon: "users",
  },
  {
    title: "Stewardship & Trust Administration",
    description: "Responsible management of ministry resources, donations, and property in furtherance of the ministry mission.",
    icon: "shield",
  },
];

export const faithPoints = [
  {
    title: "The Scriptures",
    text: "We believe the Holy Bible is the inspired, infallible, and authoritative Word of God. It is the final authority in all matters of faith, conduct, and truth.",
  },
  {
    title: "God",
    text: "We believe in one eternal, living God, Creator of heaven and earth, who exists in three persons: Father, Son, and Holy Spirit. God is all-powerful, all-knowing, and ever-present.",
  },
  {
    title: "Jesus Christ",
    text: "We believe Jesus Christ is the Son of God, born of a virgin, fully God and fully man. He lived a sinless life, died for our sins, rose on the third day, and now sits at the right hand of God as our intercessor and Savior. He will return again in glory.",
  },
  {
    title: "The Holy Spirit",
    text: "We believe the Holy Spirit indwells all believers, guiding them into all truth, convicting the world of sin, and empowering the church with spiritual gifts for ministry and service.",
  },
  {
    title: "Salvation",
    text: "We believe salvation is by grace through faith in Jesus Christ alone. It is a gift from God, not earned by works, and results in a transformed life and eternal relationship with God.",
  },
  {
    title: "The Church",
    text: "We believe the Church is the Body of Christ, made up of all believers united by faith. It exists to worship God, equip believers, and spread the Gospel to all nations.",
  },
  {
    title: "Ordinances",
    text: "We believe in the ordinances of water baptism and the Lord's Supper as symbolic acts of obedience, representing the believer's faith and the work of Christ.",
  },
  {
    title: "Marriage and Family",
    text: "We believe that marriage is a sacred covenant instituted by God as the foundation of the family unit.",
  },
  {
    title: "Sanctity of Life",
    text: "We believe all human life is sacred from conception to natural death and should be protected and honored as a gift from God.",
  },
  {
    title: "Moral Conduct",
    text: "We believe believers are called to live holy and morally upright lives, guided by the teachings of Scripture and the conviction of the Holy Spirit.",
  },
];

export const donationCategories: CardContent[] = [
  {
    title: "General Ministry Support",
    description: "Support worship, fellowship, operations, outreach, and ministry care.",
    icon: "light",
  },
  {
    title: "Benevolence Fund",
    description: "Help provide careful assistance for individuals and families facing need.",
    icon: "heart",
  },
  {
    title: "Family & Community Support",
    description: "Encourage programs that strengthen households and local community care.",
    icon: "home",
  },
  {
    title: "Education & Discipleship",
    description: "Advance Bible teaching, discipleship resources, and faith-based education.",
    icon: "book",
  },
  {
    title: "Events & Outreach",
    description: "Help gatherings, service projects, and community outreach move forward.",
    icon: "users",
  },
];
