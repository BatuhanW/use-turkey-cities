import useTurkeyCities from ".";
import cities from "./cities";
import { renderHook, act } from "@testing-library/react-hooks";

afterEach(function() {
  jest.resetModules();
});

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

  it("cities list 81 cities", () => {
    const { result } = renderHook(() => useTurkeyCities());

    expect(result.current.cities.length).toBe(81);
  });

  it("setting correct city should set districts", () => {
    const { result } = renderHook(() => useTurkeyCities());

    act(() => {
      result.current.setCity("Adana");
    });

    expect(result.current.city).toBe("Adana");

    expect(result.current.districts).toBe(cities["Adana"].districts);
  });

  it("setting *incorrect* city shoul set empty districts", () => {
    const { result } = renderHook(() => useTurkeyCities());

    act(() => {
      result.current.setCity("Random");
    });

    expect(result.current.city).toBe("Random");

    expect(result.current.districts).toBe([""]);
  });
});
