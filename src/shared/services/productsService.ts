import { Injectable } from '@nestjs/common';
import { Product } from '../../cart/models/index';


// Just a mock service, as integration with products is out of task8 scope
@Injectable()
export class ProductsService {
    private products: Array<Product> = [
        {
            id: '2064553a-6f8b-4dad-a7b1-1d687b669655',
            title: 'Mizuno Wave Momentum 2',
            description: `Stay on top of your game from start to finish with the new Momentum 2's unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.`,
            price: 119.96,
            weight: 345,
            img: 'https://dlbqczpap4fan.cloudfront.net/momentum.png'
        },
        {
            id: 'aa995683-2c2a-4add-b7b0-70f4d2f1fae8',
            title: 'Mizuno Wave Momentum 2 Mid',
            description: `Stay on top of your game from start to finish with the new Momentum 2 Mid‘s unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.`,
            price: 135.96,
            weight: 370,
            img: 'https://dlbqczpap4fan.cloudfront.net/momentum_mid.png'
        },
        {
            id: '3596a72b-c0ce-4f18-904d-a372c3b77115',
            title: 'Mizuno Wave Liminous 2',
            description: `The Wave Luminous 2 volleyball shoe is a „Hybrid Power“ indoor shoe, combining a soft running-like cushioned sole to a comfortable and secure upper construction. The full woven DynamotionFit bootie construction gently locks down your foot and provides an ideal fit, while the new MIZUNO ENERZY midsole offers a best-in-class cushioning like never experienced before.`,
            price: 139.95,
            weight: 305,
            img: 'https://dlbqczpap4fan.cloudfront.net/liminous.png'
        },
        {
            id: '6201dc5e-f6b7-4499-88c0-be5e71e571a3',
            title: 'Mizuno Thunder Blade 3',
            description: `Feel quick as a Lightning in this lightweight and comfortable Thunder Blade 3 volleyball shoe. Featuring a wide outrigger sole for improved stability, a soft injection midsole for increased cushioning feeling and a softer fit for stress-free wear, you will be ready to stay on top of your game at any moment.`,
            price: 65.95,
            weight: 3025,
            img: 'https://dlbqczpap4fan.cloudfront.net/blade.png'
        },
        {
            id: 'eb2e8389-13f1-4bcf-86b1-3ecd6702121a',
            title: 'Mizuno Wave Lightning Z7',
            description: `Stay on top of your game from start to finish with the new Momentum 2's unprecedented comfort and cushioning. This volleyball shoe features the latest MIZUNO ENERZY technology for enhanced cushioning and response, as well as the well-known Mizuno Wave for stability and cushioning at the heel. In addition, the new eyelet structure brings an optimal fit and reduces stress with no pressure points.`,
            price: 159.95,
            weight: 345,
            img: 'https://dlbqczpap4fan.cloudfront.net/lightning.png'
        },
        {
            id: 'cbd4eb85-db6b-43d5-a4b5-335fcfe412fd',
            title: 'Mizuno Wave Voltage',
            description: `This high-performance Volleyball shoe offers great dynamic cushioning and stability featuring the Mizuno Wave Technology. Thanks to its technical and lightweight sole, the Wave Voltage delivers great acceleration even in the most intense lateral movements. The mesh-based upper with a no-sew construction on the lateral side brings a great comfortable fitting.`,
            price: 119.95,
            weight: 305,
            img: 'https://dlbqczpap4fan.cloudfront.net/voltage.png'
        },
        {
            id: 'c81b6d14-2741-462e-92dc-e8ba48bf6e0e',
            title: 'Mizuno Wave Supersonic 2',
            description: `Step into the new Mizuno Wave Supersonic 2 volleyball shoe for an increased level of comfort. Combining a cushioned running-like sole with the Mizuno Wave technology, the shoe provides a very soft feel without compromising on stability. The lightweight and mesh-based upper gives you the freedom to cover comfortably every inch of the court.`,
            price: 89.95,
            weight: 300,
            img: 'https://dlbqczpap4fan.cloudfront.net/supersonic.png'
        },
        {
            id: '8e430430-0e7f-4254-af7d-35b00ff04274',
            title: 'Mizuno Wave Voltage Mid',
            description: `This high-performance volleyball shoe offers great dynamic cushioning and stability featuring the Mizuno Wave Technology. Thanks to its technical and lightweight sole, the Wave Voltage Mid delivers great acceleration even in the most intense lateral movements. The mesh-based upper with a no-sew construction on the lateral side brings a great comfortable fitting.`,
            price: 95.96,
            weight: 315,
            img: 'https://dlbqczpap4fan.cloudfront.net/voltage_mid.png'
        },
        {
            id: 'a05aa40a-f06a-4a5a-8769-541e831e59d7',
            title: 'Mizumo Rider Neo 2',
            description: `Experience cutting-edge running technology. MIZUNO ENERZY takes cushioning and energy return to new heights, giving the Wave Rider Neo men's running shoe a premium, comfortable and extremely dynamic feel. Combined with Mizuno Wave, it ensures smooth transitions and stability.`,
            price: 174.95,
            weight: 250,
            img: 'https://dlbqczpap4fan.cloudfront.net/rider_neo.png'
        },
        {
            id: 'c6814d1a-c18c-469e-8f7d-5da32ad940c1',
            title: 'Mizumo Sky Neo',
            description: `Enjoy a floating feeling during your runs with the Wave Sky Neo running shoe for men, designed to deliver a premium running experience. With MIZUNO ENERZY core, the highest functionality of the MIZUNO ENERZY series, for amazing cushioning and energy return.`,
            price: 199.95,
            weight: 326,
            img: 'https://dlbqczpap4fan.cloudfront.net/sky_neo.png'
        },
        {
            id: 'bc0ed78c-4c7b-458d-beab-6bda1c81a67b',
            title: 'Mizuno Wave Daichi 7',
            description: `A men's trail running shoe to match the adventurous spirit of the trail runner. The new Wave Daichi 7 features a MIZUNO WAVE for increased structure with EVA for increased stability without sacrificing cushioning. The lightweight Michelin rubber outsole provides unmatched grip out in the wild, and the adjustable fitting system secures your foot and delivers unbeatable adaptivity.`,
            price: 139.95,
            weight: 274,
            img: 'https://dlbqczpap4fan.cloudfront.net/daichi.png'
        },
        {
            id: 'b754d99d-49a4-4358-ab89-efb574d5da6e',
            title: 'Mizuno Wave Inspire 18',
            description: `Feel inspired to run with the new Wave Inspire 18 running shoe for men, designed to make your daily runs feel effortless whilst supporting your technique. With MIZUNO ENERZY Foam at the heel wedge, it provides great cushioning and energy return. The Double Fan-Shaped Wave supports the movement of the foot to avoid overpronation. The improved upper design provides a seamless fit.`,
            price: 145.95,
            weight: 250,
            img: 'https://dlbqczpap4fan.cloudfront.net/inspire.png'
        },
    ];

    async getProductById(id: string): Promise<Product> {
        return this.products.find(product => product.id === id);
    }

    async getProductsByIds(ids: Array<string>): Promise<Array<Product>> {
        return this.products.filter(product => ids.some(id => id === product.id));
    }

    async getProducts(): Promise<Array<Product>> {
        return this.products;
    }
}