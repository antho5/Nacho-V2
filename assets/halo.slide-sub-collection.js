(function ($) {
    var halo = {
        initSubCollectionSlider: function() {
            var subCollection = $('[data-sub-collection-slider]');
                        
            subCollection.each(function() {
                var self = $(this);
                    
                self.slick({
                    infinite: false,
                    speed: 1000, 
                    arrows: true,
                    dots: false,
                    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"></path></svg></button>',
                    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"></path></svg></button>',
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    centerMode: false,
                    responsive: [
                        {
                          breakpoint: 1450,
                          settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6
                          }
                        },
                        {
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        },
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                          }
                        },
                        {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3
                        }
                      },
                      {
                        breakpoint: 380,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                        }
                      }                                        
                      ]
                });
            });
        }
    }
    halo.initSubCollectionSlider();
})(jQuery);