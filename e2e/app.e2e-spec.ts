import { CourseProjectDataBindingPage } from './app.po';

describe('course-project-data-binding App', () => {
  let page: CourseProjectDataBindingPage;

  beforeEach(() => {
    page = new CourseProjectDataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
