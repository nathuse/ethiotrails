import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

async function main() {
    const sampleSubmissions = [
        {
            name: 'Sarah Mitchell',
            email: 'sarah.mitchell@travelworld.com',
            phone: '+44-20-7946-0958',
            message: 'Hello! I am planning a two-week trip to Ethiopia in September and would love to explore the historical sites of Lalibela and Axum. Could you provide information about guided tours that include the rock-hewn churches, accommodation options, and the best time to visit these ancient sites? I am particularly interested in understanding the cultural significance and any special festivals happening during that period.',
            status: 'unread',
            createdAt: new Date('2024-12-29').toISOString(),
        },
        {
            name: 'David Chen',
            email: 'david.chen@globaladventures.net',
            phone: '+1-415-789-3456',
            message: 'I am very interested in booking a trekking expedition to the Simien Mountains National Park. My group consists of 6 experienced hikers and we would like to do a 7-day trek including the highest peaks. Can you provide details about the difficulty level, required permits, camping arrangements, and the best season for trekking? We are also keen on spotting the endemic wildlife like the Gelada baboons and Ethiopian wolves.',
            status: 'read',
            createdAt: new Date('2024-12-27').toISOString(),
        },
        {
            name: 'Emma Rodriguez',
            email: 'emma.rodriguez@outlook.com',
            phone: null,
            message: 'Greetings! I have been fascinated by the Danakil Depression and would love to join a tour to witness the sulfur springs, salt flats, and the Erta Ale volcano. Could you share information about tour packages that include visits to these geological wonders? I am also interested in experiencing traditional Ethiopian coffee ceremonies and learning about the local Afar culture. What is the recommended duration for such a trip, and what safety measures are in place for visiting these extreme environments?',
            status: 'unread',
            createdAt: new Date('2024-12-31').toISOString(),
        },
    ];

    await db.insert(contactSubmissions).values(sampleSubmissions);
    
    console.log('✅ Contact submissions seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});