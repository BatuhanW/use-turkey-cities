import useTurkeyCities from ".";
import cities from "./cities";
import { renderHook, act } from "@testing-library/react-hooks";

afterEach(function() {
  jest.resetModules();
});

const defaultDistricts = cities["Adana"].districts;

describe("useTurkeyCities", () => {
  it("definitions", () => {
    const {
      result: { current }
    } = renderHook(() => useTurkeyCities());

    expect(current.cities).toBeDefined();

    expect(current.city).toBeDefined();
    expect(current.setCity).toBeDefined();

    expect(current.districts).toBeDefined();

    expect(current.district).toBeDefined();
    expect(current.setDistrict).toBeDefined();
  });

  it("cities should list 81 cities", () => {
    const { result } = renderHook(() => useTurkeyCities());

    expect(result.current.cities.length).toBe(81);
  });

  it("should set Adana as default city", () => {
    const { result } = renderHook(() => useTurkeyCities());

    expect(result.current.city).toBe("Adana");
    expect(result.current.districts).toBe(defaultDistricts);
  });

  it("setting correct city", () => {
    const { result } = renderHook(() => useTurkeyCities());

    act(() => {
      result.current.setCity("Antalya");
    });

    expect(result.current.city).toBe("Antalya");

    expect(result.current.districts).toBe(cities["Antalya"].districts);
  });

  it("setting *empty* city", () => {
    const { result } = renderHook(() => useTurkeyCities());

    act(() => {
      result.current.setCity("");
    });

    expect(result.current.city).toBe("");

    expect(result.current.districts).toBe(defaultDistricts);
  });

  it("setting *incorrect* city", () => {
    const { result } = renderHook(() => useTurkeyCities());

    act(() => {
      result.current.setCity("Random");
    });

    expect(result.current.city).toBe("Random");

    expect(result.current.districts).toBe(defaultDistricts);
  });
});
