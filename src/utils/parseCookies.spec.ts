import parseCookies from './parseCookies';

describe('Parse Cookies Util', () => {
  it('Should return a empty object', () => {
    const documentCookies = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae veritatis ut commodi quod doloribus, non harum consequatur vitae pariatur, eveniet, iure distinctio reiciendis nisi tenetur possimus. Magnam, provident perspiciatis!';

    const cookies = parseCookies(documentCookies);
    const cookiesKeys = Object.keys(cookies);

    expect(cookiesKeys).toHaveLength(0);
  });

  it('Should return a populated object', () => {
    const documentCookies = 'VtexWorkspace=abtesting%3Af6b557f0-040a-499f-ab1b-718d7fd534b2; VtexRCMacIdv7=c3b5c290-f0c3-11eb-b089-996e173a8470; _gcl_au=1.1.1751548468.1627600916; _fbp=fb.1.1627600916158.1277518004; biggy-anonymous=bCvggZlSoTGqKUA1K1Y6q; vtex_binding_address=storetheme.vtex.com/; _ga=GA1.2.408321476.1627600917; VtexRCSessionIdv7=03Af2a23a90-f247-11eb-b131-33a3cbc3d989; biggy-session-storecomponents=CZB6ulP5uBoy8zKqgTv51; _gid=GA1.2.1924512753.1627767640; VtexRCRequestCounter=2; _gat_UA-121537381-1=1;';

    const cookies = parseCookies(documentCookies);
    const cookiesKeys = Object.keys(cookies);

    const hasUndefinedProp = Object.values(cookies).some((value) => value === undefined);

    expect(cookiesKeys).toHaveLength(12);

    expect(cookies['VtexRCSessionIdv7']).toBe('03Af2a23a90-f247-11eb-b131-33a3cbc3d989');

    expect(cookies['_gat_UA-121537381-1']).toBe('1');

    expect(hasUndefinedProp).toBeFalsy();
  });
});