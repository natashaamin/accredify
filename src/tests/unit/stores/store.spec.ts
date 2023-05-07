// stores/counter.spec.ts
import { expect, it, describe, beforeEach, vi} from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { getUsersApi } from '@/services/userService';
import { getCareerApi } from '@/services/careerService';
import { getDocumentApi } from '@/services/documentService';

describe('Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it("loads user, career, and document", async () => {
    const mockUser = { id: 1, name: "John Doe" };
    const mockCareer = { id: 1, title: "Software Engineer" };
    const mockDocument = { id: 1, title: "My Document" };

    const userApiMock = vi.fn().mockImplementation(getUsersApi).mockResolvedValueOnce({ data: mockUser })
    const userCareerApi = vi.fn().mockImplementation(getCareerApi).mockResolvedValueOnce({ data: mockCareer })
    const userDocumentApi = vi.fn().mockImplementation(getDocumentApi).mockResolvedValueOnce({ data: mockDocument })

    const user = await userApiMock();
    expect(user.data).toEqual(mockUser);

    const career = await userCareerApi();
    expect(career.data).toEqual(mockCareer);

    const document = await userDocumentApi();
    expect(document.data).toEqual(mockDocument);
  });
})