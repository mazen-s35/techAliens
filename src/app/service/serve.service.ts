import { Injectable } from '@angular/core';
import { Service } from '../interFace/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor() { }
  allServices(): Service[] {
    return [
      {
        id: 1,
        title: 'برمجة موقع',
        content:
          'موقعك الإلكتروني هو أفضل من يتحدث عنك ويشرح أفكارك ويطرح منتجاتك. لكن حتى يحدث هذا، يجب أن يكون ت صميم موقعك الإلكتروني جذاباً وسلساً في التعامل.',
        image: 'https://cdn-icons-png.flaticon.com/512/1329/1329016.png',
      },
      {
        id: 2,
        title: 'برمجة تطبيقات الهاتف',
        content:
          'تعزز تطبيقات الهاتف وصولك لعملائك بشكل أعمق ، لاسيما وأن الهواتف المحمولة باتت أقرب لأصحابها من أفراد عائلاتهم، حسبما تؤكد الدراسات السوقية الحديثة',
        image: 'https://cdn-icons-png.flaticon.com/512/5968/5968993.png',
      },
      {
        id: 3,
        title: 'برمجة تطبيقات سطح المكتب',
        content: 'نبرمج برامج الديسكتوب بطرق احترافية لجعلها تعمل بشكل فعال',
        image: 'https://cdn-icons-png.flaticon.com/512/9671/9671008.png',
      },
      {
        id: 4,
        title: 'جرافيك دايزاني',
        content: 'نقوم باحدث التصميمات لجميع المجالات و باحدث التقنيات',
        image: 'https://cdn-icons-png.flaticon.com/512/3939/3939992.png',
      },
      {
        id: 5,
        title: 'التسويق الرقمي',
        content:
          'التواصل الفعال بين الشركة وجمهورها هو أساس نجاح التسويق وخاصة الإلكتروني. وتعتبر السوشيال ميديا وسيلة ترويجية خارقة لقدرتها على الوصول إلى أعداد غير محدودة من البشر .',
        image: 'https://cdn-icons-png.flaticon.com/512/1968/1968641.png',
      },
      {
        id: 6,
        title: 'SEO',
        content:
          'تجهيز المواقع حتى تكون متناسبة مع محركات البحث بحيث تظهر هذه المواقع بمرور الوقت واستمرار العمل عليها في النتائج الأولى من صفحات محركات البحث .',
        image: 'https://cdn-icons-png.flaticon.com/512/2977/2977836.png',
      },
    ];
  }
}
