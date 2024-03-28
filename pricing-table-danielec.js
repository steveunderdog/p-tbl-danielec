document.addEventListener('DOMContentLoaded', function() {
    const planOptionsDaniele = document.querySelectorAll('.plan-option-daniele');
    const planContentsDaniele = document.querySelectorAll('.plan-content-daniele');

    planOptionsDaniele.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsDaniele.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsDaniele.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionDaniele = document.querySelector('.expandable-section-daniele');
    const expandableContentDaniele = document.querySelector('.expandable-content-daniele');

    expandableSectionDaniele.addEventListener('click', function() {
        expandableContentDaniele.style.display = expandableContentDaniele.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnDaniele = document.getElementById('founder15-book-now-daniele');
    const founder15ScheduleEmbedDaniele = document.getElementById('founder15-schedule-embed-daniele');
    const founder15PackageDetailsDaniele = document.getElementById('founder15-package-details-daniele');
    const founder15BackToFeaturesDaniele = document.getElementById('founder15-back-to-features-daniele');

    founder15BookNowBtnDaniele.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedDaniele.style.display = 'block';
        founder15PackageDetailsDaniele.style.display = 'none';
        founder15BackToFeaturesDaniele.style.display = 'block';
    });

    founder15BackToFeaturesDaniele.addEventListener('click', function() {
        founder15ScheduleEmbedDaniele.style.display = 'none';
        founder15PackageDetailsDaniele.style.display = 'block';
        founder15BackToFeaturesDaniele.style.display = 'none';
    });

    const growthBookNowBtnDaniele = document.getElementById('growth-book-now-daniele');
    const growthScheduleEmbedDaniele = document.getElementById('growth-schedule-embed-daniele');
    const growthPackageDetailsDaniele = document.getElementById('growth-package-details-daniele');
    const growthBackToFeaturesDaniele = document.getElementById('growth-back-to-features-daniele');

    growthBookNowBtnDaniele.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedDaniele.style.display = 'block';
        growthPackageDetailsDaniele.style.display = 'none';
        growthBackToFeaturesDaniele.style.display = 'block';
    });

    growthBackToFeaturesDaniele.addEventListener('click', function() {
        growthScheduleEmbedDaniele.style.display = 'none';
        growthPackageDetailsDaniele.style.display = 'block';
        growthBackToFeaturesDaniele.style.display = 'none';
    });

    const accelerateBookNowBtnDaniele = document.getElementById('accelerate-book-now-daniele');
    const accelerateScheduleEmbedDaniele = document.getElementById('accelerate-schedule-embed-daniele');
    const acceleratePackageDetailsDaniele = document.getElementById('accelerate-package-details-daniele');
    const accelerateBackToFeaturesDaniele = document.getElementById('accelerate-back-to-features-daniele');

    accelerateBookNowBtnDaniele.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedDaniele.style.display = 'block';
        acceleratePackageDetailsDaniele.style.display = 'none';
        accelerateBackToFeaturesDaniele.style.display = 'block';
    });

    accelerateBackToFeaturesDaniele.addEventListener('click', function() {
        accelerateScheduleEmbedDaniele.style.display = 'none';
        acceleratePackageDetailsDaniele.style.display = 'block';
        accelerateBackToFeaturesDaniele.style.display = 'none';
    });
});
